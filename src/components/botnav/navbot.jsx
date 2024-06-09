import React, { useState } from 'react';
import './navbot.css';

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        number: '',
        age: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const TELEGRAM_BOT_TOKEN = '7169053691:AAEtcnh5E7GSyq15Z5R-HgT79nxFoCU-aEk';
        const TELEGRAM_CHAT_ID = '7151774589';
        const message = `Name: ${formData.name}\nLast Name: ${formData.sms}\nNumber: ${formData.number}\nXabar : ${formData.age}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                }),
            });

            if (response.ok) {
                console.log('SMS sent successfully');
            } else {
                console.error('Failed to send SMS');
            }
        } catch (error) {
            console.error('Error:', error);
        }
        // Close the modal and clear the form data
        setModalOpen(false);
        setFormData({
            name: '',
            lastName: '',
            number: '',
            age: ''
        });
    };

    return (
        <div className="App0001 ">
            <button onClick={() => setModalOpen(true)} className={"botss01"}>Murojat uchun</button>

            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <h2 className={"malumot"}>Malumot qoldiring</h2>
                            <label>
                                <input type="text" placeholder={"Ism"} name="name" value={formData.name}
                                       onChange={handleChange} required/>
                            </label>

                            <label>
                                <input type="number" placeholder={"+998 _ _ _ _ _ _ "} name="number" value={formData.number} onChange={handleChange}
                                       required/>
                            </label>
                            <label>
                                <input  placeholder={"Xabar"} type="text" name="lastName" value={formData.lastName}
                                        onChange={handleChange} required/>
                            </label>
                            {/*<label>*/}
                            {/*    <input type="text" placeholder={"Qushimcha-savol"} name="age" value={formData.age} onChange={handleChange} required/>*/}
                            {/*</label>*/}
                            <button type="submit" className={"yub"}>Yuborish</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
