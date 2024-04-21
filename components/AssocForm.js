import Link from "next/link";
import React from 'react';

import '/styles/assoc.css';
const AssocForm = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section style={{ backgroundImage: `url(require("images/image37.png"))`}} className="justify-center">
            <head >
                <span className="black_text text_left">Vous avez déjà un compte d’organistaion  ?  </span>
            </head>
            <Link href="/"
                className="blue_text">
                Connectez -vous
            </Link>
            <div className="flex justify-center">
                <div className="flex-col">
                    <h2>
                        Ajouter un compte
                    </h2>
                    <p className="white_text2">Ajouter une campagne en quelques minutes</p>
                    <p className="white_text2">Suivi en temps réel des contributions</p>
                    <p className="white_text2">Sécurité et conformité garanties</p>
                </div>
                <div className="flex-col">
                    <form
                        onSubmit={handleSubmit}
                    >

                        <label className="white_text1">
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
                            placeholder="..."
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
                                className="buttom_style"
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
