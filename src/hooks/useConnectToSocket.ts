import { useEffect, useState } from "react";


export const useConnectToSocket = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        const socket = new WebSocket('wss://n099vfqg37.execute-api.eu-north-1.amazonaws.com/production/');
        setWs(socket);

        socket.onopen = () => {
            console.log('Connected to WebSocket');
        };

        socket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data as string]);
        };



        return () => {
            socket.close();
        };
    }, []);

    const sendMessage = (value: string) => {
        if (ws) {
            ws.send(JSON.stringify(
                {
                    action: 'sendmessage',
                    message: value,
                },
            ));
        }
    };

    return { messages, sendMessage };
};

export default useConnectToSocket;