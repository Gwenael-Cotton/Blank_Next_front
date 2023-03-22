import {useState} from "react";
import ErrorInput from "./ErrorInput";

export default function LoginForm () {
    return (
      <div className="flex flex-col divide-y">
          <div className="flex flex-col">
            <form>
                <h2 className="text-center text-2xl font-bold pb-10">Je me connecte</h2>
                <ErrorInput
                  errorMessage={"Veuillez entrer un email valide."}
                  typeInput={"email"}
                  placeholder={"Votre email"}
                  label={"email"}
                />
                <ErrorInput
                  errorMessage={"Veuillez entrer un mot de passe valide."}
                  typeInput={"password"}
                  placeholder={"**********"}
                  label={"mot de passe"}
                />
                <button className="text-indigo-400 rounded p-4">Vous avez oublié votre mot de passe ?</button>
                <button className="w-full bg-indigo-400 text-white rounded p-4">Je me connecte</button>
            </form>
          </div>
          <div>
            <p className="text-center p-5">Vous n'avez pas encore de compte ?</p>
            <button className="w-full bg-transparent rounded p-4 border-2 border-gray-200">Je m'inscrit</button>
          </div>
      </div>
    )
}