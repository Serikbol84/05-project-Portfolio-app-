

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Almaty, Kazakhstan</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+77057063084">+7 (705) 706-30-84</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:sh.serikbol@gmail.com">sh.serikbol@gmail.com</a></p>
                        </li>
                    </ul>

            </div>
        </main>
    );
}
 
export default Contacts;