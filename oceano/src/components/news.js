export default function News() {
    return <div className="rounded-xl bg-white border-2 border-solid border-neutral-200 rounded-md p-4 mb-4 flex items-center justify-between space-x-1">
        <div>
            <h1 className="extraBoldNunito fontColor3C text-base">A retenir de la COP28</h1>
            <p className="nunito400 text-sm">A la COP28, le projet de texte définitif écarte l’abandon à terme des énergies fossiles.</p>
        </div>
        <div className="col-start-5">
            <img src="img/notif/cop28.svg" alt="COP28 Logo" className="mr-5 w-32 h-32" />
        </div>
    </div>
}
