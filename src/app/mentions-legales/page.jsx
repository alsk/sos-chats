"use client"


import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'



export default function Legal() {

    return (  
		<>
        <style>
            {`
                .legal-content {
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                    padding: 20px;
                    margin-top: 200px;
                    padding-bottom: 180px;
                    line-height: 140%;
                }

                .legal-content a {display: inline;}
                .legal-content ul {margin-left: 0.8rem;}
                .legal-content ul li {line-height: 130%; list-style:disc; font-size:1rem; margin: 0.3rem 0;}
                .legal-content .heading { font-size: 20px; line-height:140%; margin-top: 4rem; text-transform: uppercase;}

                .legal-content .logo{
                    width: 9rem;
                    margin: auto;
                    margin-top: 10rem;
                    margin-bottom: 6rem;
                }

                .url:after{ content: 'www..fr';}
                .company:after{ content: 'Association des Chasseurs du Pays de Sarrebourg';}
                .address:after{ content: '57260 VAL DE BRIDE';}
                .phone:after{ content: '06.24.28.78.07';}
                .email:after{ content: 'lalaixieres' '@' 'yahoo' '.fr';}
                .hosting:after{ content: 'OVH';}

            `}
        </style>


        <Nav/>

        
        <div id="legal-page">

            <div className="legal-content">


                <h1>Mentions légales</h1>


                <h5 className="heading">Identification</h5>
                <p>Le présent site <span className="url"></span> (ci-après « le Site ») est édité par <span className="company"></span>. Établissement principal : <span className="address"></span>.</p>
                {/* <p>Tél. : <span className="phone"></span></p> */}
                <p>Email : <span className="email"></span></p>
                <p>Conception / réalisation du site : <a href="https://agence-berlioz.com/" target="_blank">Agence Berlioz</a></p>
                <p>Hébergeur du site : <span className="hosting"></span></p>


                <h5 className="heading">Responsabilité</h5>
                <p><span className="company"></span> s’efforce d’assurer au mieux de ses possibilités l’exactitude et la mise à jour des informations diffusées sur le site, ainsi que l’accès à ces informations. Toutefois, <span className="company"></span> décline toute responsabilité :</p>
                <ul>
                    <li>pour toute interruption du site</li>
                    <li>pour la survenance de bogues</li>
                    <li>pour toute inexactitude ou omission portant sur des informations disponibles sur le site</li>
                    <li>pour tout dommage résultant d’une intrusion frauduleuse d’un tiers ayant entraîné une modification des informations diffusées sur ce site</li>
                    <li>et plus généralement, pour tout dommage direct et indirect, quelles qu’en soient les causes, origines, natures ou conséquences.</li>
                </ul>


                <h5 className="heading">Conditions générales d'utilisation</h5>
                <p>En utilisant le site internet de <span className="company"></span>, accessible à l’adresse <span className="url"></span>, vous acceptez d’être soumis aux présentes conditions générales d’utilisation. <span className="company"></span> se réserve le droit de modifier ou remplacer certaines dispositions des présentes conditions générales d’utilisation. Ces changements seront toutefois clairement annoncés en ligne avant leur application effective.</p>


                <h5 className="heading">Droits de propriété intellectuelle</h5>
                <p><span className="company"></span> est titulaire de tous les droits de propriété intellectuelle relatifs au site ou détient les droits d’usage y afférents. Les éléments accessibles sur le site, notamment les photographies, textes, images, icônes et logos sont également protégés par des droits de propriété intellectuelle dont <span className="company"></span> est titulaire ou sur lesquels elle détient les droits d’usage.</p>
                <p>Vous ne pouvez en aucun cas reproduire, copier, modifier, utiliser sur quelque support que ce soit, par quelque moyen que ce soit, ou exploiter de manière que ce soit tout ou partie du site sans l’autorisation écrite au préalable de <span className="company"></span>. L’exploitation non préalablement autorisée par <span className="company"></span> à quelque titre que ce soit, de tout ou partie du site pourra faire l’objet de toute action appropriée, notamment d’une action en contrefaçon.</p>


                <h5 className="heading">Liens hypertextes</h5>
                <p>L’insertion de liens hypertextes vers tout ou partie du site est autorisée, à titre non exclusif et révocable à tout moment sans que <span className="company"></span> ait à fournir une quelconque justification, et à condition que ce lien ne puisse créer à l’encontre de <span className="company"></span> un caractère mensonger, faux, péjoratif ou pouvant lui porter préjudice.</p>
                <p>Ce lien hypertexte ne pourra engager la responsabilité de <span className="company"></span> à quelque titre que ce soit, sur le contenu du site sur lequel figure le lien. Toute utilisation dans le lien du logo, de la marque ou des graphismes de <span className="company"></span> nécessite l’autorisation préalable, expresse et écrite de cette dernière.</p>


                <h5 className="heading">Collecte et traitement des données</h5>
                <p>Les informations personnelles qui vous sont demandées sur le site sont destinées exclusivement à <span className="company"></span> et à ses partenaires, à des fins de gestion administrative et commerciale, et notamment lorsque que vous nous contactez pour une candidature ou une demande d’information.</p>
                <p>Ces données ne seront utilisées à des fins de prospection directe qu’en cas de consentement préalable exprès de votre part (Loi pour la confiance de l’économie numérique n°2004-575 du 21 juin 2004).</p>
                <p>Conformément à la loi Informatiques et Libertés n°78-17 du 6 janvier 1978, nous ne conservons ces données que pour une durée limitée, en fonction de la finalité pour laquelle vous nous les avez communiquées. Vous disposez d’un droit d’accès et de rectification des données vous concernant en écrivant à : <span className="company"></span> - <span className="address"></span> - Email : <span className="email"></span></p>


            </div>




        </div>


        <Footer />


        </>
    )
}



