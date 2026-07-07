const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_moticart: "MotiCart",
    nav_moticart_about: "About MotiCart",
    nav_privacy: "Privacy Policy",
    nav_terms: "Terms of Service",
    nav_delete_account: "Delete Account",
    nav_contact: "Contact",

    // Hero Section
    hero_title: "Simple apps that solve everyday problems",
    hero_subtitle: "MotikaBot builds practical, easy-to-use mobile apps that help you stay organized, save time, and get more done—so you can focus on what matters.",
    hero_cta: "Explore our apps",

    // MotiCart Section
    featured_title: "Our Apps",
    app_name: "MotiCart",
    app_tagline: "Share your shopping list with family and track changes live.",
    app_description: "MotiCart is a simple shopping list app for families, couples, and roommates. Say goodbye to paper scraps, lost notes, or forgotten items — MotiCart gives you one shared place that updates in real-time, showing exactly what is already in the cart and what still needs to be bought. No extra messages, no typos, no confusion.",

    // Highlights
    highlight_share_title: "Share with anyone",
    highlight_share_desc: "The shared list updates in real-time on everyone's screens instantly.",
    highlight_organize_title: "No follow-up messages",
    highlight_organize_desc: "One person adds groceries from home, and the other sees them in the store immediately.",
    highlight_forget_title: "Practical and simple",
    highlight_forget_desc: "Not a complicated planner — just open the list, add what you need, and make shopping easier.",

    btn_view_app: "View on Google Play",
    btn_see_all: "See screenshots",

    // Upcoming Section
    upcoming_title: "More apps coming soon",
    upcoming_text: "We're always working on new ideas to make everyday life a little easier. Stay tuned for more helpful apps from MotikaBot!",

    // Interactive Demo
    demo_header: "Groceries",
    demo_category_produce: "Produce",
    demo_item_bananas: "Bananas",
    demo_item_avocados: "Avocados",
    demo_item_spinach: "Spinach",
    demo_item_tomatoes: "Tomatoes",
    demo_category_dairy: "Dairy",
    demo_item_milk: "Milk",
    demo_item_yogurt: "Greek Yogurt",
    demo_add_placeholder: "Add an item...",

    // Contact Section
    contact_title: "Contact Us",
    contact_text: "Have questions, feedback, or need support with one of our apps? Send us an email and we'll get back to you as soon as possible.",
    contact_btn: "Send Email",

    // Footer
    footer_tagline: "Simple apps that solve everyday problems.",
    footer_copyright: "© 2026 MotikaBot. All rights reserved.",

    // Legal Pages Header / Back Button
    back_to_home: "Back to Home",
    last_updated: "Last updated",

    // Help & FAQ Page
    nav_faq: "Help & FAQ",
    faq_title: "Help & FAQ",
    faq_subtitle: "Everything you need to know about MotiCart—limits, coins, lists, and account settings.",
    faq_search_placeholder: "Search questions...",
    faq_category_all: "All Questions",
    faq_category_general: "General",
    faq_category_sharing: "Sharing & Limits",
    faq_category_subscriptions: "Subscriptions",
    faq_category_coins: "Coins & Customization",
    faq_category_archive: "Archive & Budget",
    faq_no_results: "No questions match your search.",
    faq_items: [
      {
        category: "general",
        q: "What is MotiCart?",
        a: "MotiCart is a simple, modern mobile application designed to make grocery and household shopping easy. It allows you to create quick personal shopping lists or collaborate in real-time with family, roommates, or friends."
      },
      {
        category: "general",
        q: "Does MotiCart work offline?",
        a: "Yes! MotiCart supports two types of lists: <strong>Personal lists</strong> are saved directly on your phone and work entirely offline (perfect for supermarkets with weak cell reception). <strong>Shared lists</strong> are synchronized in real-time and require an active internet connection to keep all members in sync."
      },
      {
        category: "sharing",
        q: "How does real-time list sharing work?",
        a: "You can create a shared group (household) and generate a unique 6-character invite code. Once your family members or friends enter this code in their MotiCart app, they are added to the group. Any items added, checked off, or edited will update on everyone's screen instantly."
      },
      {
        category: "sharing",
        q: "What are the group and member limits?",
        a: "Limits depend on your subscription package:<ul><li><strong>Free plan:</strong> 1 shared group with up to 2 members.</li><li><strong>Plus plan:</strong> Up to 5 shared groups with up to 6 members per group.</li><li><strong>Family plan:</strong> Up to 10 shared groups with up to 8 members per group.</li></ul>"
      },
      {
        category: "sharing",
        q: "What is the 'Free Slots' rule for free users?",
        a: "As a Free user, you have exactly <strong>1 slot</strong> for collaborative groups. This means you can either create one shared group yourself, OR join one free group created by another user."
      },
      {
        category: "sharing",
        q: "If a paid subscriber invites me to their group, does it use my free slot?",
        a: "No! If you are invited to a group owned by an active **Plus** or **Family** subscriber, it does not consume your 1-group free limit. You can participate in their shared shopping completely free!"
      },
      {
        category: "subscriptions",
        q: "What plans are available and what do they cost?",
        a: "MotiCart offers three tiers:<ul><li><strong>Free:</strong> Supported by ads. Includes unlimited private lists and 1 shared group (2 members).</li><li><strong>Plus:</strong> Ad-free, up to 5 shared groups (6 members/group). Price: €1.49/month or €11.99/year.</li><li><strong>Family:</strong> Ad-free, up to 10 shared groups (8 members/group). Price: €2.99/month or €19.99/year.</li></ul>"
      },
      {
        category: "subscriptions",
        q: "What happens to my lists if my subscription expires?",
        a: "If your subscription expires, your account is downgraded to the Free tier:<ul><li>Ads will be enabled.</li><li>Any custom fonts/themes not bought permanently with coins will reset.</li><li>Since you are limited to 1 shared group on the Free tier, the app will ask you to select which group to keep active. Excess groups are archived (soft-deleted).</li></ul>"
      },
      {
        category: "subscriptions",
        q: "Will I lose my archived groups forever after a downgrade?",
        a: "No! We keep your soft-deleted groups archived for a **14-day grace period**. If you renew your subscription to Plus or Family within 14 days, all your archived groups and lists will be fully restored. After 14 days, they are permanently deleted to respect user privacy."
      },
      {
        category: "coins",
        q: "What are Coins (Tokens) and how can I earn them?",
        a: "Coins are an in-app currency designed for free users to unlock premium features without paying cash. You can earn them by claiming your **Daily Reward** (once every 24 hours) or by watching a short rewarded video ad."
      },
      {
        category: "coins",
        q: "What can I purchase using my Coins?",
        a: "You can spend your coins to permanently unlock specific color themes (accents) and custom fonts for the app. Additionally, you can buy ad-free days:<ul><li><strong>1 day:</strong> 35 coins</li><li><strong>7 days:</strong> 180 coins</li><li><strong>30 days:</strong> 550 coins</li></ul>"
      },
      {
        category: "coins",
        q: "Do active subscribers need to spend coins for themes or fonts?",
        a: "No. Active Plus and Family subscribers have all custom themes and app fonts automatically unlocked. If your subscription ends, you will only keep access to the themes and fonts you explicitly purchased with coins."
      },
      {
        category: "archive",
        q: "How does the item archive work?",
        a: "To keep your active list clean, checked items can be archived. Archiving moves completed items to a separate history tab where you can view past purchases."
      },
      {
        category: "archive",
        q: "Can I track my spending in the archive?",
        a: "Yes! MotiCart allows you to optionally enter a total paid amount and select a currency for each archived list. This helps you track shopping expenses over time."
      }
    ]
  },
  sr: {
    // Navigation
    nav_home: "Početna",
    nav_moticart: "MotiCart",
    nav_moticart_about: "O MotiCart-u",
    nav_privacy: "Politika privatnosti",
    nav_terms: "Uslovi korišćenja",
    nav_delete_account: "Brisanje naloga",
    nav_contact: "Kontakt",

    // Hero Section
    hero_title: "Jednostavne aplikacije koje rešavaju svakodnevne probleme",
    hero_subtitle: "MotikaBot pravi praktične mobilne aplikacije jednostavne za korišćenje koje vam pomažu da ostanete organizovani, uštedite vreme i uradite više — kako biste se fokusirali na ono što je zaista važno.",
    hero_cta: "Istražite naše aplikacije",

    // MotiCart Section
    featured_title: "Naše aplikacije",
    app_name: "MotiCart",
    app_tagline: "Deli listu za kupovinu sa porodicom i prati izmene uživo.",
    app_description: "MotiCart je jednostavna lista za kupovinu za porodicu, parove i cimere. Zaboravite na papiriće, poruke ili zaboravljene stavke — sa MotiCart-om imate jedno zajedničko mesto koje u realnom vremenu prikazuje šta je kupljeno, a šta još treba kupiti. Bez prepisivanja i bez zabune.",

    // Highlights
    highlight_share_title: "Podelite sa bilo kim",
    highlight_share_desc: "Zajednička lista se ažurira uživo na ekranima svih članova.",
    highlight_organize_title: "Bez naknadnih poruka",
    highlight_organize_desc: "Jedna osoba doda voće ili hleb od kuće, a druga to odmah vidi u prodavnici.",
    highlight_forget_title: "Praktično i jednostavno",
    highlight_forget_desc: "Nije komplikovan planer — otvoriš listu, dodaš šta treba i kupovina postaje lakša.",

    btn_view_app: "Pogledaj na Google Play",
    btn_see_all: "Pogledaj slike ekrana",

    // Upcoming Section
    upcoming_title: "Stiže još aplikacija uskoro",
    upcoming_text: "Uvek radimo na novim idejama kako bismo svakodnevni život učinili malo lakšim. Pratite nas za još korisnih aplikacija iz MotikaBot-a!",

    // Interactive Demo
    demo_header: "Kupovina",
    demo_category_produce: "Sveže voće i povrće",
    demo_item_bananas: "Banane",
    demo_item_avocados: "Avokado",
    demo_item_spinach: "Spanać",
    demo_item_tomatoes: "Paradajz",
    demo_category_dairy: "Mlečni proizvodi",
    demo_item_milk: "Mleko",
    demo_item_yogurt: "Grčki jogurt",
    demo_add_placeholder: "Dodaj stavku...",

    // Contact Section
    contact_title: "Kontaktirajte nas",
    contact_text: "Imate pitanja, povratne informacije ili vam je potrebna podrška sa nekom od naših aplikacija? Pošaljite nam imejl i odgovorićemo vam u najkraćem roku.",
    contact_btn: "Pošalji imejl",

    // Footer
    footer_tagline: "Jednostavne aplikacije koje rešavaju svakodnevne probleme.",
    footer_copyright: "© 2026 MotikaBot. Sva prava zadržana.",

    // Legal Pages Header / Back Button
    back_to_home: "Nazad na početnu",
    last_updated: "Poslednji put ažurirano",

    // Help & FAQ Page
    nav_faq: "Pomoć i FAQ",
    faq_title: "Pomoć i FAQ",
    faq_subtitle: "Sve što treba da znate o MotiCart aplikaciji — limiti, novčići, liste i podešavanja naloga.",
    faq_search_placeholder: "Pretraži pitanja...",
    faq_category_all: "Sva Pitanja",
    faq_category_general: "Opšte",
    faq_category_sharing: "Zajedničke liste",
    faq_category_subscriptions: "Pretplate",
    faq_category_coins: "Novčići i Izgled",
    faq_category_archive: "Arhiva i Troškovi",
    faq_no_results: "Nema rezultata za pretragu.",
    faq_items: [
      {
        category: "general",
        q: "Šta je MotiCart?",
        a: "MotiCart je jednostavna i moderna mobilna aplikacija za kreiranje i deljenje lista za kupovinu. Pomaže pojedincima, porodicama i cimerima da organizuju svakodnevnu nabavku, prate artikle i sarađuju u realnom vremenu."
      },
      {
        category: "general",
        q: "Da li mi je potrebna internet veza za korišćenje?",
        a: "Ne za sve funkcionalnosti! MotiCart podržava dve vrste lista: <strong>Lokalne liste</strong> se čuvaju direktno na vašem telefonu i rade potpuno offline (savršeno za prodavnice u podrumu bez signala). <strong>Zajedničke liste</strong> se sinhronizuju u realnom vremenu i zahtevaju internet konekciju kako bi svi članovi videli izmene."
      },
      {
        category: "sharing",
        q: "Kako funkcioniše deljenje lista u realnom vremenu?",
        a: "Možete kreirati zajedničku listu i generisati jedinstveni 6-cifreni kod za pozivanje. Kada vaši članovi porodice ili prijatelji unesu ovaj kod u svoju aplikaciju, biće dodati na listu. Sve stavke koje dodate, čekirate ili obrišete odmah će se ažurirati na ekranima svih članova u realnom vremenu."
      },
      {
        category: "sharing",
        q: "Koji su limiti za zajedničke liste i članove?",
        a: "Ograničenja zavise od vašeg paketa:<ul><li><strong>Besplatan paket (Free):</strong> 1 aktivna zajednička lista sa do 2 člana.</li><li><strong>Plus paket:</strong> Do 5 aktivnih zajedničkih lista sa do 6 članova po listi.</li><li><strong>Porodični paket (Family):</strong> Do 10 aktivnih zajedničkih lista sa do 8 članova po listi.</li></ul>"
      },
      {
        category: "sharing",
        q: "Šta predstavlja pravilo 'Slobodnog mesta' (Free Slots) za besplatne korisnike?",
        a: "Kao korisnik na besplatnom paketu, imate tačno <strong>1 slobodno mesto</strong> za zajedničke liste. To znači da možete ili sami kreirati jednu zajedničku listu, ILI se pridružiti jednoj besplatnoj zajedničkoj listi koju je kreirao drugi korisnik."
      },
      {
        category: "sharing",
        q: "Ako me na zajedničku listu pozove plaćeni pretplatnik, da li to troši moje slobodno mesto?",
        a: "Ne! Ako vas na svoju zajedničku listu pozove korisnik koji ima aktivan **Plus** ili **Family** paket, to ne troši vaše slobodno mesto. Možete besplatno učestvovati u njihovoj zajedničkoj kupovini bez ikakvih ograničenja!"
      },
      {
        category: "subscriptions",
        q: "Koji paketi pretplate su dostupni i koliko koštaju?",
        a: "MotiCart nudi tri paketa:<ul><li><strong>Free:</strong> Potpuno besplatan, podržan reklamama. Sadrži neograničene privatne liste i 1 aktivnu zajedničku listu (do 2 člana).</li><li><strong>Plus:</strong> Bez reklama, do 5 aktivnih zajedničkih lista (do 6 članova po listi). Cena: €1.49 mesečno ili €11.99 godišnje.</li><li><strong>Family:</strong> Bez reklama, do 10 aktivnih zajedničkih lista (do 8 članova po listi). Cena: €2.99 mesečno ili €19.99 godišnje.</li></ul>"
      },
      {
        category: "subscriptions",
        q: "Šta se dešava sa mojim listama ako mi pretplata istekne?",
        a: "Ako pretplata istekne, vaš nalog se automatski vraća na besplatan paket:<ul><li>Reklame će se ponovo prikazivati.</li><li>Sve teme i fontovi koji nisu trajno kupljeni novčićima biće resetovani na osnovne.</li><li>Pošto je besplatan paket ograničen na 1 aktivnu zajedničku listu, aplikacija će od vas tražiti da izaberete koju zajedničku listu želite da zadržite aktivnom. Preostale zajedničke liste se arhiviraju (privremeno brišu).</li></ul>"
      },
      {
        category: "subscriptions",
        q: "Da li ću trajno izgubiti arhivirane zajedničke liste nakon isteka pretplate?",
        a: "Ne! Vaše arhivirane zajedničke liste čuvamo u bazi tokom **roka od 14 dana**. Ako u tom roku ponovo aktivirate Plus ili Family pretplatu, sve vaše arhivirane zajedničke liste biće potpuno vraćene (Restore). Nakon 14 dana, one se trajno brišu radi zaštite privatnosti."
      },
      {
        category: "coins",
        q: "Šta su novčići (Coins) i kako ih mogu zaraditi?",
        a: "Novčići su valuta unutar aplikacije namenjena besplatnim korisnicima kako bi otključali dodatne opcije bez trošenja novca. Možete ih zaraditi preuzimanjem **dnevne nagrade** (jednom u 24h) ili gledanjem kratkih video reklama."
      },
      {
        category: "coins",
        q: "Na šta mogu potrošiti svoje novčiće?",
        a: "Novčiće možete iskoristiti da trajno otključate posebne vizuelne teme (boje akcenta) i stilove fontova za prilagođavanje aplikacije. Takođe, možete kupiti dane bez reklama:<ul><li><strong>1 dan:</strong> 35 novčića</li><li><strong>7 dana:</strong> 180 novčića</li><li><strong>30 dana:</strong> 550 novčića</li></ul>"
      },
      {
        category: "coins",
        q: "Da li pretplatnici moraju trošiti novčiće za teme i fontove?",
        a: "Ne. Korisnici sa aktivnim Plus ili Family paketom imaju automatski otključane sve vizuelne teme i fontove tokom trajanja pretplate. Nakon isteka pretplate, ostaju vam otključane samo one teme i fontovi koje ste eksplicitno kupili novčićima."
      },
      {
        category: "archive",
        q: "Kako funkcioniše arhiva kupljenih stavki?",
        a: "Da bi vaša šoping lista ostala uredna, kupljene stavke možete arhivirati. One se sklanjaju sa glavnog ekrana i premeštaju u istoriju kupovine."
      },
      {
        category: "archive",
        q: "Mogu li da pratim svoje troškove u arhivi?",
        a: "Da! MotiCart vam omogućava da za svaku arhiviranu listu opciono unesete ukupan plaćeni iznos i izaberete valutu. Na ovaj način možete pratiti svoje troškove kroz istoriju kupovine."
      }
    ]
  },
  es: {
    // Navigation
    nav_home: "Inicio",
    nav_moticart: "MotiCart",
    nav_moticart_about: "Sobre MotiCart",
    nav_privacy: "Política de privacidad",
    nav_terms: "Condiciones de servicio",
    nav_delete_account: "Eliminar cuenta",
    nav_contact: "Contacto",

    // Hero Section
    hero_title: "Aplicaciones sencillas que resuelven problemas cotidianos",
    hero_subtitle: "MotikaBot crea aplicaciones móviles prácticas y fáciles de usar que le ayudan a mantenerse organizado, ahorrar tiempo y hacer más cosas, para que pueda concentrarse en lo que importa.",
    hero_cta: "Explorar nuestras aplicaciones",

    // MotiCart Section
    featured_title: "Nuestras aplicaciones",
    app_name: "MotiCart",
    app_tagline: "Comparte tu lista de compras con la familia y sigue los cambios en vivo.",
    app_description: "MotiCart es una lista de compras sencilla para familias, parejas y compañeros de piso. Olvídate de los papeles, notas perdidas o mensajes de última hora: MotiCart te ofrece un lugar compartido que muestra en tiempo real qué se ha comprado y qué falta por comprar. Sin mensajes adicionales, sin confusiones.",

    // Highlights
    highlight_share_title: "Comparta con cualquiera",
    highlight_share_desc: "La lista compartida se actualiza en tiempo real en las pantallas de todos.",
    highlight_organize_title: "Sin mensajes adicionales",
    highlight_organize_desc: "Una persona añade leche o fruta desde casa y la otra lo ve al instante en la tienda.",
    highlight_forget_title: "Práctico y sencillo",
    highlight_forget_desc: "No es un planificador complejo: abre la lista, añade lo que necesitas y simplifica tus compras.",

    btn_view_app: "Ver en Google Play",
    btn_see_all: "Ver capturas de pantalla",

    // Upcoming Section
    upcoming_title: "Más aplicaciones próximamente",
    upcoming_text: "Siempre estamos trabajando en nuevas ideas para hacer la vida cotidiana un poco más fácil. ¡Esté atento a más aplicaciones útiles de MotikaBot!",

    // Interactive Demo
    demo_header: "Compras",
    demo_category_produce: "Frutas y Verduras",
    demo_item_bananas: "Plátanos",
    demo_item_avocados: "Aguacates",
    demo_item_spinach: "Espinacas",
    demo_item_tomatoes: "Tomates",
    demo_category_dairy: "Lácteos",
    demo_item_milk: "Leche",
    demo_item_yogurt: "Yogur Griego",
    demo_add_placeholder: "Agregar artículo...",

    // Contact Section
    contact_title: "Contáctenos",
    contact_text: "¿Tiene preguntas, comentarios o necesita ayuda con alguna de nuestras aplicaciones? Envíenos un correo electrónico y le responderemos lo antes posible.",
    contact_btn: "Enviar correo",

    // Footer
    footer_tagline: "Aplicaciones sencillas que resuelven problemas cotidianos.",
    footer_copyright: "© 2026 MotikaBot. Todos los derechos reservados.",

    // Legal Pages Header / Back Button
    back_to_home: "Volver al inicio",
    last_updated: "Última actualización",

    // Help & FAQ Page
    nav_faq: "Ayuda y FAQ",
    faq_title: "Ayuda y FAQ",
    faq_subtitle: "Todo lo que necesitas saber sobre MotiCart: límites, monedas, listas y configuración de cuenta.",
    faq_search_placeholder: "Buscar preguntas...",
    faq_category_all: "Todas las preguntas",
    faq_category_general: "General",
    faq_category_sharing: "Compartir y Límites",
    faq_category_subscriptions: "Suscripciones",
    faq_category_coins: "Monedas y Apariencia",
    faq_category_archive: "Archivo y Gastos",
    faq_no_results: "No hay preguntas que coincidan con tu búsqueda.",
    faq_items: [
      {
        category: "general",
        q: "¿Qué es MotiCart?",
        a: "MotiCart es una aplicación móvil sencilla y moderna diseñada para facilitar las compras diarias y del hogar. Te permite crear listas de compras personales rápidas o colaborar en tiempo real con familiares, compañeros de piso o amigos."
      },
      {
        category: "general",
        q: "¿MotiCart funciona sin conexión?",
        a: "¡Sí! MotiCart admite dos tipos de listas: Las <strong>listas personales</strong> se guardan en tu teléfono y funcionan completamente sin conexión. Las <strong>listas compartidas</strong> se sincronizan en tiempo real y requieren conexión a Internet para mantener a todos los miembros actualizados."
      },
      {
        category: "sharing",
        q: "¿Cómo funciona el compartir listas en tiempo real?",
        a: "Puedes crear un grupo compartido (hogar) y generar un código de invitación único de 6 caracteres. Cuando los miembros de tu familia o amigos introduzcan este código en su aplicación MotiCart, se unirán al grupo. Cualquier artículo agregado, marcado o editado se actualizará en la pantalla de todos al instante."
      },
      {
        category: "sharing",
        q: "¿Cuáles son los límites de grupos y miembros?",
        a: "Los límites dependen de tu paquete de suscripción:<ul><li><strong>Plan gratuito:</strong> 1 grupo compartido con hasta 2 miembros.</li><li><strong>Plan Plus:</strong> Hasta 5 grupos compartidos con hasta 6 miembros por grupo.</li><li><strong>Plan Familiar:</strong> Hasta 10 grupos compartidos con hasta 8 miembros por grupo.</li></ul>"
      },
      {
        category: "sharing",
        q: "¿Qué es la regla de 'Espacio libre' (Free Slot) para usuarios gratuitos?",
        a: "Como usuario gratuito, tienes exactamente <strong>1 espacio libre</strong> para grupos compartidos. Esto significa que puedes crear un grupo compartido tú mismo O unirte a un grupo gratuito creado por otro usuario."
      },
      {
        category: "sharing",
        q: "Si un suscriptor de pago me invita a su grupo, ¿consume mi espacio libre?",
        a: "¡No! Si eres invitado a un grupo propiedad de un suscriptor activo de **Plus** o **Familiar**, no consume tu límite gratuito de 1 grupo. ¡Puedes colaborar en sus compras compartidas totalmente gratis!"
      },
      {
        category: "subscriptions",
        q: "¿Qué planes están disponibles y cuánto cuestan?",
        a: "MotiCart ofrece tres niveles:<ul><li><strong>Gratuito:</strong> Con anuncios. Incluye listas privadas ilimitadas y 1 grupo compartido (2 miembros).</li><li><strong>Plus:</strong> Sin anuncios, hasta 5 grupos compartidos (6 miembros/grupo). Precio: €1.49/mes o €11.99/año.</li><li><strong>Familiar:</strong> Sin anuncios, hasta 10 grupos compartidos (8 miembros/grupo). Precio: €2.99/mes o €19.99/año.</li></ul>"
      },
      {
        category: "subscriptions",
        q: "¿Qué pasa con mis listas si mi suscripción expira?",
        a: "Si tu suscripción expira, tu cuenta pasará al plan Gratuito:<ul><li>Se activarán los anuncios.</li><li>Cualquier tema o fuente que no se haya comprado con monedas se restablecerá.</li><li>Como estás limitado a 1 grupo compartido, la aplicación te pedirá que elijas qué grupo mantener activo. Los grupos excedentes se archivarán (eliminación temporal).</li></ul>"
      },
      {
        category: "subscriptions",
        q: "¿Perderé mis grupos archivados para siempre después de una degradación?",
        a: "¡No! Conservamos tus grupos archivados durante un **período de gracia de 14 días**. Si renuevas tu suscripción a Plus o Familiar dentro de los 14 días, todos tus grupos y listas archivados se restaurarán por completo. Después de 14 días, se eliminarán de forma permanente."
      },
      {
        category: "coins",
        q: "¿Qué son las Monedas y cómo puedo ganarlas?",
        a: "Las monedas son una divisa dentro de la aplicación para que los usuarios gratuitos desbloqueen funciones premium sin pagar dinero. Puedes ganarlas reclamando tu **Recompensa Diaria** (cada 24 horas) o viendo un anuncio de video corto."
      },
      {
        category: "coins",
        q: "¿Qué puedo comprar con mis Monedas?",
        a: "Puedes gastar monedas para desbloquear permanentemente temas de color y fuentes personalizadas. También puedes comprar días sin anuncios:<ul><li><strong>1 día:</strong> 35 monedas</li><li><strong>7 días:</strong> 180 monedas</li><li><strong>30 días:</strong> 550 monedas</li></ul>"
      },
      {
        category: "coins",
        q: "¿Los suscriptores activos necesitan gastar monedas para temas o fuentes?",
        a: "No. Los suscriptores de Plus y Familiar tienen todos los temas y fuentes desbloqueados automáticamente. Si tu suscripción expira, solo conservarás el acceso a los temas y fuentes que compraste explícitamente con monedas."
      },
      {
        category: "archive",
        q: "¿Cómo funciona el archivo de artículos?",
        a: "Para mantener tu lista activa limpia, los artículos marcados se pueden archivar. Esto los mueve a una pestaña de historial separada donde puedes ver compras anteriores."
      },
      {
        category: "archive",
        q: "¿Puedo realizar un seguimiento de mis gastos en el archivo?",
        a: "¡Sí! MotiCart te permite ingresar opcionalmente un monto pagado total y seleccionar una moneda para cada lista archivada, lo que te ayuda a realizar un seguimiento de tus gastos a lo largo del tiempo."
      }
    ]
  },
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_moticart: "MotiCart",
    nav_moticart_about: "À propos de MotiCart",
    nav_privacy: "Politique de confidentialité",
    nav_terms: "Conditions d'utilisation",
    nav_delete_account: "Supprimer le compte",
    nav_contact: "Contact",

    // Hero Section
    hero_title: "Des applications simples pour résoudre les problèmes du quotidien",
    hero_subtitle: "MotikaBot crée des applications mobiles pratiques et faciles à utiliser qui vous aident à rester organisé, à gagner du temps et à en faire plus, afin que vous puissiez vous concentrer sur l'essentiel.",
    hero_cta: "Explorer nos applications",

    // MotiCart Section
    featured_title: "Nos applications",
    app_name: "MotiCart",
    app_tagline: "Partagez votre liste de courses en famille et suivez les modifications en direct.",
    app_description: "MotiCart est une liste de courses simple pour les familles, les couples et les colocataires. Oubliez les papiers perdus, les notes ou les textos de dernière minute : MotiCart vous offre un espace partagé qui affiche en temps réel ce qui est déjà acheté et ce qu'il reste à prendre. Sans messages superflus, sans confusion.",

    // Highlights
    highlight_share_title: "Partagez avec tout le monde",
    highlight_share_desc: "La liste commune se synchronise instantanément sur les écrans de tous les membres.",
    highlight_organize_title: "Fini les textos oubliés",
    highlight_organize_desc: "Une personne ajoute du lait ou des fruits depuis la maison, et l'autre le voit aussitôt au supermarché.",
    highlight_forget_title: "Simple et pratique",
    highlight_forget_desc: "Pas de planificateur complexe : ouvrez la liste, ajoutez vos articles et facilitez vos courses.",

    btn_view_app: "Voir sur Google Play",
    btn_see_all: "Voir captures d'écran",

    // Upcoming Section
    upcoming_title: "D'autres applications à venir",
    upcoming_text: "Nous travaillons constamment sur de nouvelles idées pour faciliter votre quotidien. Restez à l'écoute pour d'autres applications utiles de MotikaBot !",

    // Interactive Demo
    demo_header: "Courses",
    demo_category_produce: "Fruits & Légumes",
    demo_item_bananas: "Bananes",
    demo_item_avocados: "Avocats",
    demo_item_spinach: "Épinards",
    demo_item_tomatoes: "Tomates",
    demo_category_dairy: "Produits Laitiers",
    demo_item_milk: "Lait",
    demo_item_yogurt: "Yaourt Grec",
    demo_add_placeholder: "Ajouter un article...",

    // Contact Section
    contact_title: "Contactez-nous",
    contact_text: "Vous avez des questions, des commentaires ou besoin d'aide avec l'une de nos applications ? Envoyez-nous un e-mail et nous vous répondrons dans les plus brefs délais.",
    contact_btn: "Envoyer un e-mail",

    // Footer
    footer_tagline: "Des applications simples pour résoudre les problèmes du quotidien.",
    footer_copyright: "© 2026 MotikaBot. Tous droits réservés.",

    // Legal Pages Header / Back Button
    back_to_home: "Retour à l'accueil",
    last_updated: "Dernière mise à jour",

    // Help & FAQ Page
    nav_faq: "Aide & FAQ",
    faq_title: "Aide & FAQ",
    faq_subtitle: "Tout ce que vous devez savoir sur MotiCart — limites, pièces, listes et paramètres de compte.",
    faq_search_placeholder: "Rechercher des questions...",
    faq_category_all: "Toutes les questions",
    faq_category_general: "Général",
    faq_category_sharing: "Partage & Limites",
    faq_category_subscriptions: "Abonnements",
    faq_category_coins: "Pièces & Personnalisation",
    faq_category_archive: "Archive & Budget",
    faq_no_results: "Aucune question ne correspond à votre recherche.",
    faq_items: [
      {
        category: "general",
        q: "Qu'est-ce que MotiCart?",
        a: "MotiCart is a simple, modern mobile application designed to make grocery and household shopping easy. It allows you to create quick personal shopping lists or collaborate in real-time with family, roommates, or friends."
      },
      {
        category: "general",
        q: "MotiCart fonctionne-t-il hors ligne?",
        a: "Oui ! MotiCart propose deux types de listes : Les <strong>listes personnelles</strong> sont stockées sur votre téléphone et fonctionnent sans connexion. Les <strong>listes partagées</strong> se synchronisent en temps réel et nécessitent Internet pour garder tous les membres à jour."
      },
      {
        category: "sharing",
        q: "Comment fonctionne le partage de listes en temps réel?",
        a: "Vous pouvez créer un groupe partagé (foyer) et générer un code d'invitation unique à 6 caractères. Dès que vos proches entrent ce code, ils rejoignent le groupe. Tout article ajouté, coché ou modifié est mis à jour instantanément sur tous les écrans."
      },
      {
        category: "sharing",
        q: "Quelles sont les limites de groupes et de membres?",
        a: "Les limites dépendent de votre abonnement :<ul><li><strong>Version Gratuite :</strong> 1 groupe partagé avec 2 membres max.</li><li><strong>Abonnement Plus :</strong> Jusqu'à 5 groupes partagés avec 6 membres max. par groupe.</li><li><strong>Abonnement Famille :</strong> Jusqu'à 10 groupes partagés avec 8 membres max. par groupe.</li></ul>"
      },
      {
        category: "sharing",
        q: "Qu'est-ce que la règle de l'emplacement libre (Free Slot)?",
        a: "En tant qu'utilisateur gratuit, vous disposez d'un **emplacement libre unique** pour les groupes partagés. Vous pouvez soit créer votre propre groupe partagé, soit rejoindre un groupe créé par un autre utilisateur gratuit."
      },
      {
        category: "sharing",
        q: "Si un abonné payant m'invite dans son groupe, cela consomme-t-il mon emplacement?",
        a: "Non ! Si un abonné actif **Plus** ou **Famille** vous invite dans son groupe, cela ne consomme pas votre limite. Vous pouvez participer gratuitement à leurs listes partagées !"
      },
      {
        category: "subscriptions",
        q: "Quels sont les abonnements disponibles et leurs tarifs?",
        a: "MotiCart propose trois formules :<ul><li><strong>Gratuite :</strong> Avec publicités. Listes privées illimitées et 1 groupe partagé (2 membres).</li><li><strong>Plus :</strong> Sans publicité, jusqu'à 5 groupes (6 membres/groupe). Tarifs : 1,49 €/mois ou 11,99 €/an.</li><li><strong>Famille :</strong> Sans publicité, jusqu'à 10 groupes (8 membres/groupe). Tarifs : 2,99 €/mois ou 19,99 €/an.</li></ul>"
      },
      {
        category: "subscriptions",
        q: "Que se passe-t-il pour mes listes si mon abonnement expire?",
        a: "Si votre abonnement expire, votre compte repasse en mode gratuit :<ul><li>Les publicités réapparaissent.</li><li>Les thèmes et polices non achetés avec des pièces seront réinitialisés.</li><li>Limité à 1 groupe partagé, l'application vous demandera de choisir le groupe à garder actif. Les autres seront archivés (suppression temporaire).</li></ul>"
      },
      {
        category: "subscriptions",
        q: "Est-ce que je perdrai définitivement mes groupes archivés après downgrade?",
        a: "Non ! Nous conservons vos groupes archivés pendant un **délai de grâce de 14 jours**. Si vous vous réabonnez à Plus ou Famille durant cette période, tout sera entièrement restauré. Après 14 jours, ils seront définitivement supprimés."
      },
      {
        category: "coins",
        q: "Qu'est-ce que les pièces et comment en gagner?",
        a: "Les pièces sont une monnaie virtuelle permettant aux utilisateurs gratuits de débloquer des fonctionnalités premium sans payer. Vous pouvez en gagner via la **Récompense Quotidienne** (toutes les 24h) ou en regardant une courte vidéo publicitaire."
      },
      {
        category: "coins",
        q: "Que puis-je acheter avec mes pièces?",
        a: "Vous pouvez débloquer définitivement des thèmes de couleur et des polices. Vous pouvez également acheter des jours sans publicité :<ul><li><strong>1 jour :</strong> 35 pièces</li><li><strong>7 jours :</strong> 180 pièces</li><li><strong>30 jours :</strong> 550 pièces</li></ul>"
      },
      {
        category: "coins",
        q: "Les abonnés actifs doivent-ils acheter les thèmes et polices?",
        a: "Non. Les abonnés Plus et Famille ont tous les thèmes et polices débloqués automatiquement. À l'expiration de l'abonnement, vous ne gardez que ceux achetés explicitement avec vos pièces."
      },
      {
        category: "archive",
        q: "Comment fonctionne l'archivage d'articles?",
        a: "Pour garder votre liste propre, les articles cochés peuvent être archivés dans un onglet historique séparé."
      },
      {
        category: "archive",
        q: "Puis-je suivre mes dépenses dans les archives?",
        a: "Oui ! MotiCart vous permet de renseigner un montant total payé et une devise pour chaque liste archivée afin de suivre l'évolution de vos dépenses."
      }
    ]
  },
  de: {
    // Navigation
    nav_home: "Startseite",
    nav_moticart: "MotiCart",
    nav_moticart_about: "Über MotiCart",
    nav_privacy: "Datenschutzerklärung",
    nav_terms: "Nutzungsbedingungen",
    nav_delete_account: "Konto löschen",
    nav_contact: "Kontakt",

    // Hero Section
    hero_title: "Einfache Apps, die Alltagsprobleme lösen",
    hero_subtitle: "MotikaBot entwickelt praktische, benutzerfreundliche mobile Apps, die Ihnen helfen, organisiert zu bleiben, Zeit zu sparen und mehr zu erledigen – damit Sie sich auf das Wesentliche konzentrieren können.",
    hero_cta: "Unsere Apps erkunden",

    // MotiCart Section
    featured_title: "Unsere Apps",
    app_name: "MotiCart",
    app_tagline: "Teile deine Einkaufsliste mit der Familie und verfolge Änderungen live.",
    app_description: "MotiCart ist die einfache Einkaufsliste für Familien, Paare und WGs. Vergiss Zettelchaos, verlorene Notizen oder späte Nachrichten – MotiCart bietet einen gemeinsamen Ort, der in Echtzeit zeigt, was schon im Einkaufswagen liegt und was noch fehlt. Ohne zusätzliche Nachrichten und ohne Missverständnisse.",

    // Highlights
    highlight_share_title: "Mit jedem teilen",
    highlight_share_desc: "Die gemeinsame Liste wird in Echtzeit auf allen Geräten der Mitglieder aktualisiert.",
    highlight_organize_title: "Keine späten SMS mehr",
    highlight_organize_desc: "Eine Person fügt Milch oder Obst von zu Hause hinzu, und die andere sieht es sofort im Supermarkt.",
    highlight_forget_title: "Praktisch und einfach",
    highlight_forget_desc: "Kein komplizierter Planer — öffne die Liste, füge hinzu, was du brauchst, und mache den Einkauf entspannter.",

    btn_view_app: "Auf Google Play ansehen",
    btn_see_all: "Screenshots ansehen",

    // Upcoming Section
    upcoming_title: "Weitere Apps folgen in Kürze",
    upcoming_text: "Wir arbeiten ständig an neuen Ideen, um den Alltag ein wenig einfacher zu machen. Bleiben Sie gespannt auf weitere nützliche Apps von MotikaBot!",

    // Interactive Demo
    demo_header: "Einkäufe",
    demo_category_produce: "Obst & Gemüse",
    demo_item_bananas: "Bananen",
    demo_item_avocados: "Avocados",
    demo_item_spinach: "Spinat",
    demo_item_tomatoes: "Tomaten",
    demo_category_dairy: "Milchprodukte",
    demo_item_milk: "Milch",
    demo_item_yogurt: "Griechischer Joghurt",
    demo_add_placeholder: "Artikel hinzufügen...",

    // Contact Section
    contact_title: "Kontaktieren Sie uns",
    contact_text: "Haben Sie Fragen, Feedback oder benötigen Sie Unterstützung bei einer unserer Apps? Senden Sie uns eine E-Mail, und wir werden uns so schnell wie möglich bei Ihnen melden.",
    contact_btn: "E-Mail senden",

    // Footer
    footer_tagline: "Einfache Apps, die Alltagsprobleme lösen.",
    footer_copyright: "© 2026 MotikaBot. Alle Rechte vorbehalten.",

    // Legal Pages Header / Back Button
    back_to_home: "Zurück zur Startseite",
    last_updated: "Zuletzt aktualisiert",

    // Help & FAQ Page
    nav_faq: "Hilfe & FAQ",
    faq_title: "Hilfe & FAQ",
    faq_subtitle: "Alles, was Sie über MotiCart wissen müssen – Limits, Münzen, Listen und Kontoeinstellungen.",
    faq_search_placeholder: "Fragen suchen...",
    faq_category_all: "Alle Fragen",
    faq_category_general: "Allgemein",
    faq_category_sharing: "Teilen & Limits",
    faq_category_subscriptions: "Abonnements",
    faq_category_coins: "Münzen & Anpassung",
    faq_category_archive: "Archiv & Ausgaben",
    faq_no_results: "Keine Fragen entsprechen Ihrer Suche.",
    faq_items: [
      {
        category: "general",
        q: "Was ist MotiCart?",
        a: "MotiCart ist eine einfache und moderne mobile Anwendung, die das Einkaufen im Alltag erleichtert. Sie können damit persönliche Einkaufslisten erstellen oder in Echtzeit mit Familie, Mitbewohnern oder Freunden zusammenarbeiten."
      },
      {
        category: "general",
        q: "Funktioniert MotiCart offline?",
        a: "Ja! MotiCart unterstützt zwei Arten von Listen: <strong>Persönliche Listen</strong> werden auf Ihrem Telefon gespeichert und funktionieren offline. <strong>Gemeinsame Listen</strong> werden in Echtzeit synchronisiert und erfordern Internet."
      },
      {
        category: "sharing",
        q: "Wie funktioniert das Teilen von Listen in Echtzeit?",
        a: "Sie können eine gemeinsame Gruppe (Haushalt) erstellen und einen 6-stelligen Einladungscode generieren. Sobald Ihre Kontakte diesen Code eingeben, werden sie hinzugefügt. Alle Änderungen werden sofort auf allen Bildschirmen aktualisiert."
      },
      {
        category: "sharing",
        q: "Welche Gruppen- und Mitgliedslimits gibt es?",
        a: "Die Limits hängen von Ihrem Paket ab:<ul><li><strong>Kostenlos:</strong> 1 gemeinsame Gruppe mit bis zu 2 Mitgliedern.</li><li><strong>Plus-Paket:</strong> Bis zu 5 gemeinsame Gruppen mit bis zu 6 Mitgliedern pro Gruppe.</li><li><strong>Familien-Paket:</strong> Bis zu 10 gemeinsame Gruppen mit bis zu 8 Mitgliedern pro Gruppe.</li></ul>"
      },
      {
        category: "sharing",
        q: "Was ist die 'Freier Slot'-Regel für kostenlose Nutzer?",
        a: "Als kostenloser Nutzer haben Sie genau <strong>1 freien Slot</strong> für gemeinsame Gruppen. Sie können entweder selbst eine Gruppe erstellen ODER einer kostenlosen Gruppe eines anderen Nutzers beitreten."
      },
      {
        category: "sharing",
        q: "Wenn mich ein zahlender Abonnent einlädt, verbraucht das meinen Slot?",
        a: "Nein! Wenn Sie in die Gruppe eines aktiven **Plus**- oder **Familien**-Abonnenten eingeladen werden, verbraucht dies nicht Ihr Limit. Sie können völlig kostenlos teilnehmen!"
      },
      {
        category: "subscriptions",
        q: "Welche Pakete sind verfügbar und was kosten sie?",
        a: "MotiCart bietet drei Stufen:<ul><li><strong>Kostenlos:</strong> Mit Werbung. Unbegrenzte private Listen und 1 gemeinsame Gruppe (2 Mitglieder).</li><li><strong>Plus:</strong> Werbefrei, bis zu 5 Gruppen (6 Mitglieder/Gruppe). Preis: €1.49/Monat oder €11.99/Jahr.</li><li><strong>Familie:</strong> Werbefrei, bis zu 10 Gruppen (8 Mitglieder/Gruppe). Preis: €2.99/Monat oder €19.99/Jahr.</li></ul>"
      },
      {
        category: "subscriptions",
        q: "Was passiert mit meinen Listen, wenn mein Abonnement abläuft?",
        a: "Nach Ablauf des Abonnements wird Ihr Konto auf die kostenlose Stufe zurückgestuft:<ul><li>Werbung wird wieder aktiviert.</li><li>Nicht mit Münzen gekaufte Designs und Schriftarten werden zurückgesetzt.</li><li>Sie müssen eine Gruppe auswählen, die aktiv bleibt. Überschüssige Gruppen werden archiviert (soft-deleted).</li></ul>"
      },
      {
        category: "subscriptions",
        q: "Verliere ich meine archivierten Gruppen nach der Herabstufung dauerhaft?",
        a: "Nein! Wir bewahren Ihre archivierten Gruppen für eine **14-tägige Frist** auf. Wenn Sie innerhalb von 14 Tagen erneut Plus oder Familie abonnieren, wird alles wiederhergestellt. Danach werden sie dauerhaft gelöscht."
      },
      {
        category: "coins",
        q: "Was sind Münzen (Coins) und wie verdiene ich sie?",
        a: "Münzen sind eine In-App-Währung für kostenlose Nutzer. Sie können sie verdienen, indem Sie Ihre **tägliche Belohnung** abholen oder ein kurzes Werbevideo ansehen."
      },
      {
        category: "coins",
        q: "Was kann ich mit meinen Münzen kaufen?",
        a: "Sie können Farbmotive und Schriftarten dauerhaft freischalten oder werbefreie Tage erwerben:<ul><li><strong>1 Tag:</strong> 35 Münzen</li><li><strong>7 Tage:</strong> 180 Münzen</li><li><strong>30 Tage:</strong> 550 Münzen</li></ul>"
      },
      {
        category: "coins",
        q: "Müssen Abonnenten Münzen für Designs oder Schriftarten ausgeben?",
        a: "Nein. Abonnenten haben automatisch Zugriff auf alle Designs und Schriftarten. Nach Ablauf des Abonnements behalten Sie nur die mit Münzen gekauften Elemente."
      },
      {
        category: "archive",
        q: "Wie funktioniert das Archivieren von Artikeln?",
        a: "Um Ihre Liste übersichtlich zu halten, können abgehakte Artikel in einen separaten Verlauf-Tab verschoben werden."
      },
      {
        category: "archive",
        q: "Kann ich meine Ausgaben im Archiv erfassen?",
        a: "Ja! Sie können optional den gezahlten Gesamtbetrag und die Währung eintragen, um Ihre Einkaufsstatistiken zu verfolgen."
      }
    ]
  }
};
