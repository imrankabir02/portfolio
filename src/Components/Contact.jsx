import { CONTACT } from "../constants"

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                Contact Info
            </h1>
            <div className="text-center tracking-tighter">
                <p className="my-4">
                    {CONTACT.address}
                </p>
                <p className="my-4">
                    {CONTACT.phoneNo}
                </p>
                <p className="my-4">
                    {CONTACT.email}
                </p>
            </div>
        </div>
    )
}

export default Contact