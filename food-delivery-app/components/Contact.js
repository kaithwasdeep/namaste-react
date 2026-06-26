const Contact = () => {
    return (
        <div className="">
            <h1>Contact Us</h1>
            {/* <h2>This is Contact Us Page</h2> */}
            <form>
                <input type="text" name="name" placeholder="Enter name" />
                <input type="text" name="email" placeholder="Enter email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Contact;