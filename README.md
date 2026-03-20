# Bateria de Preguntes: Git i GitHub

## 1. Reconeix la utilitat de les aplicacions d’ofimàtica web

**Explica per què GitHub es pot considerar una aplicació web de treball col·laboratiu.**
GitHub permet que múltiples usuaris treballin sobre el mateix codi simultàniament des de qualsevol lloc. Ofereix eines com el seguiment de canvis, discussió en línia i gestió de tasques, facilitant que un equip estigui sincronitzat sense trepitjar-se la feina.

**Quins avantatges té utilitzar GitHub en lloc de guardar els fitxers d’un projecte només en un ordinador local?**
* **Còpia de seguretat:** Si l'ordinador local s'espatlla, el codi està fora de perill.
* **Accessibilitat:** Permet treballar des de diferents dispositius.
* **Historial:** Permet revertir canvis a qualsevol punt anterior del temps.
* **Visibilitat:** Permet mostrar el projecte al món o a reclutadors.

**Com pot ajudar GitHub a gestionar versions d’un projecte web o d’una aplicació?**
Permet guardar commits del projecte en cada etapa. Si una actualització nova trenca l'aplicació, es pot tornar a la versió anterior de forma immediata.

**En quins tipus de projectes és especialment útil utilitzar Git i GitHub?**
En projectes de desenvolupament de programari, disseny web, ciència de dades i, en general, qualsevol projecte basat en text (com llibres o documentació) on hi participin diverses persones.

**Quines diferències hi ha entre un sistema de control de versions com Git i un sistema tradicional d’emmagatzematge de fitxers?**
L'emmagatzematge tradicional (com una carpeta al núvol tipus Drive) només sol guardar l'estat actual. Git guarda **tota l'evolució**, qui va fer cada canvi, per què el va fer i permet ramificar el projecte en camins diferents.

## 2. Classifica segons la funcionalitat i prestacions específiques

**Explica quina és la diferència entre Git i GitHub.**
* **Git** és l'eina o el programari que instal·les al teu ordinador per gestionar l'historial de versions localment.
* **GitHub** és la plataforma web o el servidor on puges els teus projectes de Git per compartir-los i col·laborar.

**Quines funcionalitats ofereix GitHub a més del control de versions del codi?**
Ofereix gestió de projectes (Kanban), automatització de proves (GitHub Actions), allotjament web (GitHub Pages), seguretat i fòrums de discussió.

**Esbrina i defineix les següents funcionalitats de GitHub segons el seu ús:**
* **Repositoris:** La carpeta del projecte on es guarda tot el codi i el seu historial.
* **Issues:** Un sistema de tiquets per reportar errors, suggerir millores o llistar tasques pendents.
* **Pull requests:** Una petició per fusionar canvis d'una branca a una altra, ideal per revisar el codi abans d'acceptar-lo.
* **GitHub Pages:** Servei per allotjar llocs web estàtics directament des d'un repositori.

**Quina funció tenen les branques (branches) en Git?**
Permeten crear una línia de treball separada per provar idees o noves funcionalitats sense afectar el codi principal (main) que està funcionant.

**Per a què serveixen les pull requests en un projecte col·laboratiu?**
Serveixen per revisar la qualitat del codi d'un company, discutir canvis i assegurar-se que el que s'afegeix al projecte no trenca res.

## 3. Gestiona els comptes d’usuari

**Què és un compte d’usuari a GitHub i per què és necessari per treballar amb repositoris remots?**
És la identitat digital que t'identifica com a autor dels canvis. És necessari per controlar qui té permís per escriure en un repositori i per assignar la "firma" de cada commit.

**Quina diferència hi ha entre un repositori públic i un privat a GitHub?**
* **Públic:** Qualsevol pot veure el codi.
* **Privat:** Només tu i els col·laboradors que triis podeu veure i modificar el codi.

**Com es pot afegir un col·laborador a un repositori de GitHub?**
Des de la configuració del repositori (**Settings** > **Collaborators**), enviant una invitació mitjançant el seu nom d'usuari o correu electrònic.

**Quins rols o permisos pot tenir un usuari dins d’un repositori?**
Van des de "Read" (només llegir), "Write" (poden fer canvis directament), fins a "Admin" (poden esborrar el repositori o canviar la configuració).

**Per i què és important gestionar correctament els permisos dels usuaris en un projecte col·laboratiu?**
Per evitar que algú sense experiència o malintencionat esborri feina important o publiqui codi defectuós a la branca principal.

## 4. Aplica criteris de seguretat en l’accés dels usuaris

**Quins riscos pot tenir compartir un repositori amb massa permisos per a tots els usuaris?**
Risc d'esborrat accidental de dades, introducció de vulnerabilitats de seguretat o pèrdua de control sobre el rumb del projecte.

**Per què és recomanable utilitzar autenticació segura (com tokens o SSH) per accedir a GitHub?**
Perquè les contrasenyes tradicionals són més fàcils de robar o desxifrar. Els tokens o les claus SSH són mètodes molt més robustos i específics per a cada dispositiu.

**Què passaria si es publiquen contrasenyes o claus privades dins d’un repositori?**
Qualsevol persona o bot de rastreig podria accedir als teus serveis, bases de dades o comptes personals, provocant robatoris d'informació o càrrecs econòmics.

**Quines bones pràctiques de seguretat s’han de seguir quan es treballa amb GitHub?**
No pujar mai credencials, activar l'autenticació de dos factors (2FA) i revisar periòdicament qui té accés al repositori.

**Per què és important controlar qui pot fer push directament a la branca principal (main)?**
Per garantir que el codi que hi ha a la rama principal (main) estigui sempre provat i funcioni correctament. Sol protegir-se obligant a passar una Pull Request prèvia.

## 5. Utilitza les aplicacions de forma cooperativa

**Explica com poden treballar diverses persones al mateix projecte utilitzant GitHub.**
Cada programador fa una còpia (clon) al seu PC, crea una branca per a la seva tasca, fa els canvis, els puja a GitHub i demana una Pull Request per unir-los al projecte principal.

**Per què és útil treballar amb branques en lloc de modificar directament la branca principal?**
Perquè permet treballar en paral·lel en diferents funcionalitats sense que els errors d'una persona aturin la feina de les altres.

## 6. Elabora documentació relativa a l’ús i la gestió de les aplicacions

**Per què és important incloure un fitxer README.md en un repositori de GitHub?**
És la carta de presentació. Explica què fa el projecte, com s'instal·la i com s'utilitza. Sense ell, el repositori és difícil d'entendre per a algú nou.

**Quins avantatges té utilitzar Markdown per escriure documentació a GitHub?**
És un llenguatge molt senzill de llegir tant en text pla com renderitzat (amb negretes, llistes, imatges i codi), i és l'estàndard universal en el món del desenvolupament.

**Com pot ajudar la documentació a altres desenvolupadors que volen utilitzar o modificar el projecte?**
Estalvia temps, evita preguntes repetitives i servei de guia per mantenir un estil de codi coherent i seguir els passos de configuració sense errors.