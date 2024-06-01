const axios = require('axios');

class WhatabotHTTPClient {
    constructor() {
        this.apiKey = "YOUR_API_KEY";
        this.phone = "YOUR_PHONE_NUMBER";
        this.url = "https://api.whatabot.io/Whatsapp/RequestSendMessage";
        this.headers = {
            "Content-Type": "application/json",
            "x-api-key": this.apiKey
        };
    }

    async sendMessage(text) {
        const data = {
            "ApiKey": this.apiKey,
            "Text": text,
            "Phone": this.phone
        };

        try {
            const response = await axios.post(this.url, data, { headers: this.headers });
            console.log("Message sent successfully");
        } catch (error) {
            console.error("Failed to send message:", error.response.statusText);
        }
    }
}

async function main() {
    const client = new WhatabotHTTPClient();
    await client.sendMessage("Hello from node.js!");
}

main();