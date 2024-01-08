export default function GeneralInfo({ handleFormChange }) {
    return (
        <section>
            <h3>General Informations</h3>
            <form>
                <label htmlFor="name">
                    <span>Name</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="name"
                    />
                </label>
                <label htmlFor="email">
                    <span>Email</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="email"
                        id="email"
                    />
                </label>
                <label htmlFor="phone-number">
                    <span>Phone Number</span>
                    <input
                        onChange={(e) => handleFormChange(e)}
                        type="tel"
                        id="phone-number"
                    />
                </label>
                <label htmlFor="about">
                    <span>About You</span>
                    <textarea
                        style={{ resize: "vertical" }}
                        onChange={(e) => handleFormChange(e)}
                        type="text"
                        id="about"
                        cols="30"
                        rows="4"
                    ></textarea>
                </label>
            </form>
        </section>
    );
}
