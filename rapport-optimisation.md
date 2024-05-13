#  “Rapport d’optimisation du projet ScrollyTelling” 

[Page Speed Insights - Rapport du 13 mai 2024, 00:15:06🕥](https://pagespeed.web.dev/analysis/https-ikrame-tim-momo-com/3xfe116pl4?form_factor=desktop)


### Problème #1
Éliminer les ressources qui bloquent le rendu
Problème à résoudre : Certaines ressources bloquent la première visualisation (first paint) de votre page, ralentissant ainsi le chargement initial.

Action concrète pour résoudre le problème :
Utiliser des outils de minification et de concaténation pour réduire la taille des fichiers CSS et JavaScript.
Déplacer les scripts non essentiels vers la fin du chargement de la page ou les charger de manière asynchrone.
Utiliser des CDN pour les ressources statiques afin de bénéficier de la mise en cache et d'une livraison plus rapide.


### Problème #2
Les éléments d'image ne possèdent pas de width ni de height explicites
Problème à résoudre : L'absence de dimensions explicites sur les éléments d'image peut entraîner des décalages de mise en page (CLS) lors du chargement de la page.

Action concrète pour résoudre le problème :
Ajouter des attributs width et height aux balises d'image en utilisant des valeurs proches de la taille réelle de l'image.
Utiliser des outils en ligne ou des éditeurs d'image pour redimensionner les images et obtenir les dimensions souhaitées.
Vérifier et mettre à jour le code HTML pour inclure les dimensions explicites sur chaque balise d'image.

### Problème #3
Diffusez des images aux formats nouvelle génération
Problème à résoudre : Les formats d'image obsolètes comme PNG et JPEG peuvent entraîner des temps de chargement plus longs.

Action concrète pour résoudre le problème :
Convertir les images existantes en formats modernes comme WebP en utilisant des outils en ligne gratuits ou des plugins pour les éditeurs d'image.
Mettre à jour le code HTML pour référencer les nouvelles versions des images au format WebP.
Tester la compatibilité des navigateurs et fournir une alternative pour ceux qui ne prennent pas en charge les formats d'image modernes.