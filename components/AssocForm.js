import Link from "next/link";

const AssocForm = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text_left">
                <span className="green_gradient"> Add your organasation now !</span>
            </h1>

            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
                <label className="font-satoshi font-semibold text-base text-gray-700">
                    Organisation mail
                </label>
                <input
                    value={post.mail}
                    onChange={(e) => {
                        setPost({...post, mail: e.target.value});
                    }}
                    className="form_input"
                    placeholder="Example@ns.com"
                    required
                />
                <label className="font-satoshi font-semibold text-base text-gray-700">
                    CEO/Founder name
                </label>
                <input
                    value={post.cname}
                    onChange={(e) => {
                        setPost({...post, cname: e.target.value});
                    }}
                    className="form_input"
                    placeholder="Name"
                    required
                />
                <label className="font-satoshi font-semibold text-base text-gray-700">
                    Organisation phone number
                </label>
                <input
                    value={post.number}
                    onChange={(e) => {
                        setPost({...post, number: e.target.value});
                    }}
                    className="form_input"
                    placeholder="+216"
                    required
                />

                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/Greeners-main%20(copy)/public" className="text-gray-500 text-sm hover:text-red-400">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 rounded-full bg-green-400 text-white font-inter font-medium"
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AssocForm;
