import Link from "next/link";
//openssl rand -base64 32import Background from '../images/image37.png';

// var handsImage = {
//     backgroundImage: "url(" + { Background } + ")"
// };
const AssocForm = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <head className="head_text text_right">
                <span className="green_gradient">Vous avez déjà un compte d’organistaion  ?  </span>
            </head>
            <Link href="/Greeners-main%20(copy)/public"
                className="text-gray-500 text-sm hover:text-red-400">
                Connectez -vous
            </Link>
            <div className="head_text text_right">
                <div className={""}>
                    <h2>
                        Ajouter un compte
                    </h2>
                    <p>Ajouter une campagne en quelques minutes</p>
                    <p>Suivi en temps réel des contributions</p>
                    <p>Sécurité et conformité garanties</p>
                </div>
                <div className="right_card">
                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
                    >

                        <label className="font-satoshi font-semibold text-base text-gray-700">
                            Nom de l'organisation
                        </label>
                        <input
                            value={post.assocName}
                            onChange={(e) => {
                                setPost({...post, assocName: e.target.value});
                            }}
                            className="form_input"
                            placeholder="Name"
                            required
                        />
                        <label className="font-satoshi font-semibold text-base text-gray-700">
                            Description de l'organisation
                        </label>
                        <textarea
                            value={post.desc}
                            onChange={(e) => {
                                setPost({...post, desc: e.target.value});
                            }}
                            className="form_textarea"
                            placeholder="+216"
                            required
                        />
                        <label className="font-satoshi font-semibold text-base text-gray-700">
                            Adresse e-mail
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
                            Mot de passe
                        </label>
                        <input
                            value={post.password}
                            onChange={(e) => {
                                setPost({...post, password: e.target.value});
                            }}
                            className="form_input"
                            placeholder="Example@ns.com"
                            required
                        />
                        <div className="flex-end mx-3 mb-5 gap-4">
                            <Link href="/Greeners-main%20(copy)/public"
                                  className="text-gray-500 text-sm hover:text-red-400">
                                retour
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
                </div>
            </div>
        </section>
    );
};

export default AssocForm;
