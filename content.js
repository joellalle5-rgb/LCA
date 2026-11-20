const DATA={
tabs:[
{id:'cadrage',label:'Avant de lire',intro:'Ce que vous fixez avant d’ouvrir le premier PDF. Sans cela, on lit « pour tout » et on retient peu.',blocks:[
 {t:'Cadrer la question',items:['Question formulée : PICO (intervention), PECO (exposition), PCC (scoping), PIRD (diagnostic)','Nature de la question identifiée : causale, descriptive, pronostique ou diagnostique','Type de revue choisi : narrative, systématique, scoping, méta-analyse'],warn:['Question vague : tout article paraît pertinent et la revue ne converge pas.']},
 {t:'Règles du jeu',items:['Critères d’inclusion/exclusion fixés a priori','Stratégie de recherche tracée (bases, équations, dates, nombre de résultats)','Grille de notes préparée avant la lecture (onglet « Fiche de notes »)'],warn:['Critères modifiés après avoir vu les résultats : biais de sélection de la revue elle-même.']},
 {t:'Question posée à chaque article',items:['Qu’apporte cet article à ma question ?','Avec quel niveau de confiance ?','Comble-t-il une lacune ou répète-t-il l’existant ?']}]},
{id:'passes',type:'passes',label:'Trois passes',intro:'Ne lisez pas tous les articles de la même façon : triez, puis approfondissez uniquement ce qui le mérite.',blocks:[
 {t:'Passe 1 : triage (2 à 5 min)',obj:'Décider : écarter, garder, ou lire en profondeur.',items:['Titre et résumé lus','Figures et tableaux principaux regardés','Conclusion lue','Décision prise et notée'],warn:['Se contenter du résumé : il surestime régulièrement les résultats.']},
 {t:'Passe 2 : lecture ciblée',obj:'Former votre propre jugement avant celui des auteurs.',items:['Introduction : état des lieux et lacune annoncée','Méthodes lues en entier','Résultats lus avant la discussion','Discussion lue seulement après votre jugement'],warn:['Lire la discussion d’abord : vous adoptez l’interprétation des auteurs sans la tester.']},
 {t:'Passe 3 : lecture critique (articles clés)',obj:'Reconstruire l’analyse : les résultats soutiennent-ils vraiment la conclusion ?',items:['Annexes et matériel supplémentaire consultés','Chiffres exacts (effet, IC, n) relevés','Erratums, rétractations, commentaires recherchés','Références clés ajoutées à la recherche (backward/forward)']}]},
{id:'sections',label:'Section par section',intro:'Pour chaque partie d’un article, les questions utiles et ce qui doit vous alerter.',blocks:[
 {t:'Résumé et titre',items:['Le design est-il annoncé ?','Le critère principal figure-t-il dans le résumé ?'],warn:['Conclusion plus forte que les résultats détaillés.']},
 {t:'Introduction',items:['Lacune de connaissance clairement identifiée','Objectif et hypothèse explicites'],warn:['Objectif formulé après coup ou sans critère de jugement principal.']},
 {t:'Méthodes',items:['Voir l’onglet « Méthodes » pour la grille détaillée'],warn:['Méthodes trop courtes pour reproduire l’étude.']},
 {t:'Résultats',items:['Diagramme de flux : combien d’inclus, d’exclus, de perdus de vue ?','Tableau 1 : groupes comparables ?','Effet principal avec IC, pas seulement p','Analyses secondaires et sous-groupes pré-spécifiés ?'],warn:['Sous-groupes nombreux, p isolés, critère principal changé par rapport au protocole.']},
 {t:'Discussion',items:['Limites réellement discutées (biais, confusion résiduelle)','Conclusions limitées à ce que les données permettent','Comparaison honnête avec la littérature'],warn:['Extrapolation causale à partir d’une association observationnelle.']},
 {t:'Annexes et conflits d’intérêts',items:['Analyses de sensibilité en annexe consultées','Financement et conflits d’intérêts lus','Protocole ou enregistrement (registre d’essais, OSF) retrouvé']}]},
{id:'design',type:'design',label:'Selon le design',intro:'Choisissez le design de l’étude : vigilance propre, outil de qualité et checklist de rapportage.'},
{id:'methodes',label:'Méthodes',intro:'C’est dans les méthodes que se trouve la valeur réelle d’un article.',blocks:[
 {t:'Population et sélection',items:['Population source et mode d’échantillonnage décrits','Critères de sélection clairs','Généralisabilité à mon contexte'],warn:['Échantillon de convenance, patients de centres tertiaires, survivants seulement.']},
 {t:'Exposition et critère de jugement',items:['Définitions précises et validées','Moment de la mesure','Mesure aveugle ou standardisée'],warn:['Critère composite hétérogène, mesure déclarative, mesure différentielle entre groupes.']},
 {t:'Confusion',items:['Facteurs de confusion identifiés a priori (DAG ou connaissances) ?','Ajustement adapté : méthode et variables','Confusion résiduelle discutée'],warn:['Ajustement sur un médiateur ou un collisionneur ; sélection des variables uniquement par p.']},
 {t:'Données manquantes et perdus de vue',items:['Proportion et raisons rapportées','Méthode de traitement (analyse complète, imputation multiple)','Perdus de vue différents entre groupes ?'],warn:['Analyse des cas complets sans justification ; attrition > 20 % ou déséquilibrée.']},
 {t:'Modèle statistique',items:['Adapté à la structure des données : mesures répétées, censure, clustering','Hypothèses vérifiées (proportionnalité, linéarité, indépendance)','Taille d’échantillon et puissance justifiées','Multiplicité des tests prise en compte'],warn:['Régression standard sur données longitudinales ou groupées ; surajustement (peu d’événements par variable).']},
 {t:'Analyses de sensibilité',items:['Conclusion robuste aux choix d’analyse ?','Analyses pré-spécifiées ou exploratoires ?'],warn:['Un seul modèle présenté, aucune analyse de robustesse.']}]},
{id:'notes',type:'notes',label:'Fiche de notes',intro:'Vous remplissez, l’application ne fait que stocker (dans ce navigateur) et exporter. Notez les chiffres exacts.'},
{id:'synthese',label:'Comparer et synthétiser',intro:'La valeur d’une revue est dans la comparaison, pas dans la juxtaposition.',blocks:[
 {t:'Comparer les études',items:['Pourquoi les résultats divergent : population, définition, modèle, période ?','Résultats pondérés par qualité et précision','Hétérogénéité expliquée, pas seulement constatée'],warn:['Vote counting : compter les articles « dans le même sens ».']},
 {t:'Repérer les lacunes',items:['Ce que personne n’a mesuré','Ce qui a été mal analysé','Contextes ou populations absents (ex. pays à ressources limitées)']},
 {t:'Pièges de la synthèse',items:['Biais de publication envisagé (asymétrie, petites études)','Significativité distinguée de la pertinence clinique','Niveau de confiance global formulé (ex. GRADE)'],warn:['Conclure à partir des seuls articles les plus cités ou les plus récents.']}]},
{id:'gloss',type:'gloss',label:'Glossaire et ressources',intro:'Rappels courts.'}
],
designs:{
essai:{label:'Essai randomisé',outil:'RoB 2',rep:'CONSORT',
 vig:['Génération et dissimulation de la séquence','Insu des participants et évaluateurs','Analyse en intention de traiter','Critère principal pré-spécifié'],warn:['Critère principal différent du registre ; arrêt précoce pour bénéfice.'],
 q:['Randomisation : séquence, dissimulation, déséquilibres initiaux ?','Écarts aux interventions prévues ?','Données de résultat manquantes ?','Mesure du critère biaisée ?','Résultat rapporté sélectivement ?'],
 repItems:['Diagramme de flux','Calcul de l’effectif','Effets avec IC','Événements indésirables']},
cohorte:{label:'Cohorte',outil:'ROBINS-I / Newcastle-Ottawa',rep:'STROBE',
 vig:['Comparabilité des exposés et non-exposés','Biais d’immortalité','Perdus de vue','Confusion résiduelle'],warn:['Exposition mesurée après le critère ; « initiateurs » vs « prévalents » mélangés.'],
 q:['Confusion contrôlée par quelles variables ?','Sélection indépendante de l’exposition ?','Classification de l’exposition fiable ?','Suivi suffisant et complet ?','Critère évalué à l’aveugle ?'],
 repItems:['Flux des participants','Définition des variables','Gestion des manquants','Analyses de sensibilité']},
cascontrole:{label:'Cas-témoins',outil:'Newcastle-Ottawa',rep:'STROBE',
 vig:['Choix des témoins (même population source ?)','Biais de rappel','Définition du cas incident ou prévalent','Appariement et analyse adaptée'],warn:['Témoins hospitaliers pour une exposition liée à l’hospitalisation.'],
 q:['Cas définis de façon valide ?','Témoins représentatifs de la source ?','Exposition mesurée de façon identique chez cas et témoins ?','Appariement pris en compte dans l’analyse ?'],
 repItems:['Critères de sélection cas et témoins','Source de l’exposition','Odds ratio avec IC']},
transversale:{label:'Transversale',outil:'JBI',rep:'STROBE',
 vig:['Ambiguïté temporelle (cause ou conséquence ?)','Taux de réponse','Échantillonnage'],warn:['Interprétation causale ; données auto-déclarées non validées.'],
 q:['Échantillon représentatif ?','Critères d’inclusion clairs ?','Exposition et critère mesurés de façon valide ?','Confusion identifiée et traitée ?'],
 repItems:['Taux de participation','Prévalence avec IC','Gestion des manquants']},
diagnostic:{label:'Test diagnostique',outil:'QUADAS-2',rep:'STARD',
 vig:['Spectre de patients','Test de référence indépendant','Biais de vérification','Seuil choisi a priori ?'],warn:['Cas-témoins diagnostiques : surestime la performance.'],
 q:['Sélection des patients : consécutifs ?','Test index interprété à l’aveugle ?','Test de référence adapté ?','Délai entre tests approprié ?'],
 repItems:['Table 2x2','Sensibilité, spécificité avec IC','Valeurs prédictives selon la prévalence']},
pronostic:{label:'Pronostic / prédiction',outil:'PROBAST',rep:'TRIPOD',
 vig:['Nombre d’événements par prédicteur','Validation interne et externe','Calibration et discrimination','Gestion des manquants'],warn:['Modèle développé et testé sur les mêmes données ; seuils dichotomisés.'],
 q:['Population adaptée à l’usage visé ?','Prédicteurs disponibles au moment de la décision ?','Analyse statistique adaptée ?','Surajustement évalué ?'],
 repItems:['Équation complète du modèle','Calibration (graphique)','AUC avec IC']},
revue:{label:'Revue systématique / méta-analyse',outil:'AMSTAR 2 / ROBIS',rep:'PRISMA',
 vig:['Protocole enregistré (PROSPERO)','Recherche exhaustive et reproductible','Évaluation du risque de biais des études','Hétérogénéité et biais de publication'],warn:['Mélange d’études très hétérogènes en un seul effet global.'],
 q:['Question et critères définis a priori ?','Sélection et extraction en double ?','Risque de biais intégré aux conclusions ?','Modèle à effets aléatoires justifié, I² interprété ?'],
 repItems:['Diagramme PRISMA','Équations de recherche complètes','Liste des études exclues','Forest plot et funnel plot']}
},
champs:[
{k:'ref',l:'Référence'},{k:'pays',l:'Pays / contexte'},{k:'design',l:'Design'},{k:'pop',l:'Population et effectif'},
{k:'expo',l:'Exposition / intervention'},{k:'crit',l:'Critère de jugement'},{k:'analyse',l:'Méthode d’analyse'},{k:'res',l:'Résultat principal (effet, IC, p)',long:1},
{k:'lim',l:'Limites',long:1},{k:'rob',l:'Risque de biais',opts:['Faible','Modéré','Élevé','Critique']},{k:'pert',l:'Pertinence pour ma question',long:1},{k:'decision',l:'Décision',opts:['Garder','À relire','Écarter']}
],
gloss:[
['Biais de sélection','Les participants analysés diffèrent systématiquement de la population cible.'],
['Biais d’information','Erreur systématique de mesure de l’exposition ou du critère.'],
['Confusion','Un facteur lié à l’exposition et au critère fausse l’association.'],
['Collisionneur','Variable causée par exposition et critère ; l’ajuster crée un biais.'],
['Biais d’immortalité','Période de suivi pendant laquelle l’événement ne peut pas survenir, mal attribuée.'],
['Vote counting','Compter les études positives et négatives sans pondérer.'],
['Biais de publication','Les résultats négatifs ou petits sont moins publiés.'],
['I²','Part de la variabilité entre études due à l’hétérogénéité plutôt qu’au hasard.'],
['Pertinence clinique','Ampleur de l’effet utile en pratique, indépendamment du p.'],
['GRADE','Cadre d’évaluation du niveau de confiance dans un corps de preuves.']
],
res:[
['Gestion et notes','Zotero (tags cohérents, PDF annotés).'],
['Tri en double aveugle','Rayyan, Covidence.'],
['Cartographie de la littérature','ResearchRabbit, Connected Papers (en complément de la lecture).'],
['Checklists','equator-network.org (STROBE, CONSORT, PRISMA, TRIPOD, STARD).'],
['Qualité','riskofbias.info (RoB 2, ROBINS-I), jbi.global, bristol.ac.uk/population-health-sciences/projects/probast.']
]};
