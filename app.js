const messages = []
function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

class Message{
    constructor(authorName, message){
        this.authorName = authorName;
        this.currentTime = gettime();
        this.messageContent = message;
    }
    toString(){
        return `${this.currentTime} ${this.authorName}: ${this.messageContent}`;
    }
}

class Messenger{
    messages = []
    send(author,text){
        let p = new Message(author,text);
        messages.push(p.toString());
    }
    show_history(){
        messages.forEach(element => {
            console.log(element);
        });
    }
}


let messenger = new Messenger();
messenger.send('Артем', 'Первое сообщение');
messenger.send('Мария', 'Второе сообщение');
messenger.show_history();