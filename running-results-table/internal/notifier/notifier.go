package notifier
    import (
        "pusher/running-results-table/internal/db"
        "github.com/pusher/pusher-http-go"
    )
    type Notifier struct {
        notifyChannel chan<- bool
    }
    func notifier(database *db.Database, notifyChannel <-chan bool) {
        client := pusher.Client{
   	 	AppID: "801324",
    		Key: "ece1dcf4c08c6cec0e3f",
    		Secret: "da893bda332a588c0e55",
    		Cluster: "us2",
    		Secure: true,
  	}

        for {
            <-notifyChannel
            data := map[string][]db.Record{"results": database.GetRecords()}
            client.Trigger("results", "results", data)
        }
    }
    func New(database *db.Database) Notifier {
        notifyChannel := make(chan bool)
        go notifier(database, notifyChannel)
        return Notifier{
            notifyChannel,
        }
    }
    func (notifier *Notifier) Notify() {
        notifier.notifyChannel <- true
    }
