export default function Form() {
    return (
        <div className="p-4 md:p-6 rounded-lg bg-white border-lime-500 border-2 max-w-2xl w-full mx-auto">
            <form className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message</label>
                    <textarea
                        id="message"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Your Message"
                        rows={8}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-lime-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-lime-600 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}