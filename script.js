document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    da: {
      pageTitle: 'Frydendahl Invest ApS | Investeringsprodukter, AI-agenter og rådgivning',
      metaDescription:
        'Frydendahl Invest ApS bygger investeringsprodukter, AI-agenter, monitoreringsløsninger og rådgivning til investorer, lokale virksomheder og sportsklubber.',
      brandAria: 'Frydendahl Invest ApS hjem',
      mainNavAria: 'Hovednavigation',
      langSwitchAria: 'Sprogvalg',
      navWhat: 'Det vi laver',
      navTracker: 'Portfolio Tracker',
      navOfferings: 'Ydelser',
      navAbout: 'Om os',
      btnSeeOfferings: 'Se ydelser',
      btnTalk: 'Kontakt os',
      heroEyebrow: 'Investeringsprodukter, AI-agenter og rådgivning',
      heroTitle: 'Frydendahl Invest bygger praktiske finans- og AI-løsninger til virksomheder i drift.',
      heroText:
        'Vi udvikler produkter som Portfolio Tracker, bygger AI-agenter og monitoreringsløsninger, rådgiver lokale virksomheder og fodboldklubber og investerer selv aktivt på tværs af flere markeder. Derfor bygger vores arbejde på reel driftserfaring, ikke kun slides og teori.',
      heroCtaPrimary: 'Tal med Frydendahl Invest',
      heroCtaSecondary: 'Udforsk det vi laver',
      trustAria: 'Nøglefordele',
      trust1: 'Investeringsprodukter',
      trust2: 'AI-agent ekspertise',
      trust3: 'Rådgivning til lokale organisationer',
      heroVisualAria: 'Produktdashboard forhåndsvisning',
      heroChip: 'Portefølje på tværs af markeder',
      portfolioValueLabel: 'Porteføljeværdi',
      statCapital: 'Sporbar kapital',
      statMarkets: 'Markeder',
      statUseCases: 'Anvendelser',
      float1Label: 'Rådgivning',
      float1Value: 'Virksomheder og klubber',
      float2Label: 'AI-leverance',
      float2Value: 'Agenter og monitorering',
      partnersLead: 'Bygget på aktiv investering, produktudvikling og hands-on rådgivning',
      partnersAria: 'Platformens kerneområder',
      partners1: 'Portfolio Tracker',
      partners2: 'AI-agenter',
      partners3: 'Monitorering',
      partners4: 'Rådgivning',
      featuresEyebrow: 'Det vi laver',
      featuresTitle: 'Frydendahl Invest arbejder på tværs af produkter, AI og rådgivning.',
      feature1:
        'Vores porteføljeplatform giver investorer, husstande og rådgivere ét sted til at følge beholdninger, allokering, skattekontekst og rapportering.',
      feature2Title: 'AI-agenter',
      feature2:
        'Vi bygger AI-agenter til finans, drift, monitorering og videntunge arbejdsgange, designet til reel forretningsværdi frem for hype.',
      feature3Title: 'Monitoreringssystemer',
      feature3:
        'Vi designer monitorering og alarmering, så ejere og teams opdager problemer tidligere og arbejder med bedre overblik.',
      feature4Title: 'Rådgivning til lokale organisationer',
      feature4:
        'Vi hjælper lokale virksomheder, fodboldklubber og vækstorganisationer med praktisk rådgivning, digital struktur og bedre beslutningsstøtte.',
      feature5Title: 'Aktiv markedserfaring',
      feature5:
        'Vi investerer selv aktivt på flere markeder, hvilket skærper vores tilgang til værktøjer, risiko, rapportering og porteføljebeslutninger.',
      feature6Title: 'Leverancer med lav friktion',
      feature6:
        'Fra lette websites til interne værktøjer og automation prioriterer vi løsninger, der er vedligeholdbare, skalerbare og kommercielt fornuftige.',
      flagshipEyebrow: 'Signaturprodukt',
      flagshipTitle: 'Portfolio Tracker er en del af en bredere platform fra Frydendahl Invest.',
      flagshipText:
        'Portfolio Tracker omsætter komplekse beholdninger, husstandseksponering og skattefølsomme beslutninger til et mere klart driftsbillede. Den er bygget med samme praktiske og markedsnære mindset som vores investeringsarbejde og rådgivning.',
      check1Title: 'Følg på tværs af konti',
      check1Text: 'Saml beholdninger, husstandskonti og eksponering i ét operationelt overblik.',
      check2Title: 'Se skatte- og porteføljesignaler',
      check2Text:
        'Forstå allokering, skattemæssige hensyn og rapportering uden at jonglere adskilte regneark.',
      check3Title: 'Brug det som beslutningslag',
      check3Text:
        'Understøt investorreviews, rådgiversamtaler og fremtidige AI-anbefalinger med reel kontekst.',
      marketsHeader: 'Markeder vi opererer i',
      marketsActive: 'Aktiv',
      market1: 'Danmark',
      market1Info: 'Aktier og lokal indsigt',
      market2: 'USA',
      market2Info: 'Vækst, tech og bred eksponering',
      market3: 'Europa',
      market3Info: 'Diversificeret markedsdækning',
      market4: 'Løbende udvidelse',
      market4Info: 'Flere markeder over tid',
      offeringsEyebrow: 'Ydelser',
      offeringsTitle: 'Samarbejd med Frydendahl Invest på den måde, der passer til opgaven.',
      price1Tier: 'Produkt',
      price1Text:
        'Et fokuseret produkt til investorer og rådgivere, der ønsker bedre struktur, synlighed og rapportering.',
      price1Item1: 'Porteføljeoverblik',
      price1Item2: 'Husstands- og skattekontekst',
      price1Item3: 'Rådgiverklar rapportering',
      price1Cta: 'Spørg til produktet',
      price2Tier: 'AI og drift',
      price2Title: 'Agenter og monitorering',
      price2Text:
        'Tilpassede AI-agent- og monitoreringsløsninger til finans, drift og videntunge arbejdsgange.',
      price2Item1: 'AI-agenter til forretningsflows',
      price2Item2: 'Design af monitorering og alarmering',
      price2Item3: 'Praktisk leverance af automation',
      price2Item4: 'Tilpasset implementering',
      price2Cta: 'Drøft en AI-løsning',
      price3Tier: 'Rådgivning',
      price3Title: 'Rådgivningsforløb',
      price3Text:
        'Hands-on støtte til lokale virksomheder, fodboldklubber og ejerledede organisationer, der vil styrke systemer og beslutninger.',
      price3Item1: 'Strategi og digital struktur',
      price3Item2: 'Driftsreview og forbedringer',
      price3Item3: 'Fleksibelt samarbejde',
      price3Cta: 'Start en dialog',
      launchEyebrow: 'Klar til lancering',
      launchTitle: 'Start med Frydendahl Invest på invest.begin.dk.',
      launchText:
        'Vi er klar til at lancere brand-sitet og starte dialoger om Portfolio Tracker, AI-agenter, monitoreringsløsninger og rådgivningsforløb for lokale virksomheder og fodboldklubber.',
      launchCta1: 'Åbn invest.begin.dk',
      launchCta2: 'Skriv til Rune',
      launchCta3: 'Se kontaktoplysninger',
      quoteText:
        '“Frydendahl Invest samler produkttænkning, reel investeringserfaring, AI-agent viden og praktisk rådgivning ét sted. Det er netop den kombination, der gør arbejdet kommercielt anvendeligt.”',
      quoteAuthor: '— Frydendahl Invest tilgang',
      quoteSub: 'Produkter, rådgivning og aktiv markedsdeltagelse',
      footerLead:
        'Investeringsprodukter, AI-agenter, monitoreringsløsninger og rådgivning til investorer og lokale organisationer.',
      footerContactTitle: 'Kontakt',
      footerHostingTitle: 'Bygget til lavpris-hosting',
      footerHost1: 'Fungerer som statisk website',
      footerHost2: 'Let at hoste på Cloudflare Pages',
      footerHost3: 'Enkelt til WordPress eller subdomæne',
      footerTagline: 'Investering. Produkter. AI-agenter. Rådgivning.'
    },
    en: {
      pageTitle: 'Frydendahl Invest ApS | Investment Products, AI Agents & Consultancy',
      metaDescription:
        'Frydendahl Invest ApS builds investment products, AI agents, monitoring solutions and consultancy for investors, local companies and sports clubs.',
      brandAria: 'Frydendahl Invest ApS home',
      mainNavAria: 'Main navigation',
      langSwitchAria: 'Language selector',
      navWhat: 'What we do',
      navTracker: 'Portfolio Tracker',
      navOfferings: 'Offerings',
      navAbout: 'About',
      btnSeeOfferings: 'See offerings',
      btnTalk: 'Talk to us',
      heroEyebrow: 'Investment products, AI agents and consultancy',
      heroTitle: 'Frydendahl Invest builds practical finance and AI solutions for real-world operators.',
      heroText:
        'We develop products like Portfolio Tracker, build AI agents and monitoring solutions, advise local companies and football clubs, and invest actively across multiple markets ourselves. That means our work is grounded in actual operating experience, not just slides and theory.',
      heroCtaPrimary: 'Talk to Frydendahl Invest',
      heroCtaSecondary: 'Explore what we do',
      trustAria: 'Key benefits and trust items',
      trust1: 'Investment products',
      trust2: 'AI agent expertise',
      trust3: 'Consultancy for local organisations',
      heroVisualAria: 'Product dashboard preview',
      heroChip: 'Multi-market portfolio',
      portfolioValueLabel: 'Portfolio value',
      statCapital: 'Capital tracked',
      statMarkets: 'Markets',
      statUseCases: 'Use cases',
      float1Label: 'Consultancy',
      float1Value: 'Companies & clubs',
      float2Label: 'AI delivery',
      float2Value: 'Agents & monitoring',
      partnersLead: 'Built from active investing, product work and hands-on advisory',
      partnersAria: 'Platform trust indicators',
      partners1: 'Portfolio Tracker',
      partners2: 'AI agents',
      partners3: 'Monitoring',
      partners4: 'Consultancy',
      featuresEyebrow: 'What we do',
      featuresTitle: 'Frydendahl Invest operates across products, AI and advisory work.',
      feature1:
        'Our portfolio platform gives investors, households and advisors one place to track holdings, allocation, tax context and reporting.',
      feature2Title: 'AI agents',
      feature2:
        'We build AI agents for finance, operations, monitoring and knowledge workflows, designed around practical business use instead of novelty.',
      feature3Title: 'Monitoring systems',
      feature3:
        'We design monitoring and alerting setups that help owners and teams see issues earlier and operate with better visibility.',
      feature4Title: 'Consultancy for local organisations',
      feature4:
        'We support local companies, football clubs and growing organisations with practical advice, digital structure and better decision support.',
      feature5Title: 'Active market experience',
      feature5:
        'We actively invest ourselves across several markets, which sharpens how we think about tools, risk, reporting and portfolio decisions.',
      feature6Title: 'Low-friction delivery',
      feature6:
        'From lightweight websites to internal tools and automation, we favor solutions that are maintainable, scalable and commercially sensible.',
      flagshipEyebrow: 'Flagship product',
      flagshipTitle: 'Portfolio Tracker is one part of a broader Frydendahl Invest platform.',
      flagshipText:
        'Portfolio Tracker turns complex holdings, household exposure and tax-sensitive decisions into a cleaner operating view. It is built from the same practical, market-facing mindset that drives our investment work and advisory services.',
      check1Title: 'Track across accounts',
      check1Text: 'Combine holdings, household accounts and exposure into one working overview.',
      check2Title: 'See tax and portfolio signals',
      check2Text:
        'Understand allocation, tax considerations and reporting without juggling disconnected sheets.',
      check3Title: 'Use it as a decision layer',
      check3Text:
        'Support investor reviews, advisor conversations and future AI-assisted recommendations with real context.',
      marketsHeader: 'Markets we operate in',
      marketsActive: 'Active',
      market1: 'Denmark',
      market1Info: 'Equities & local insight',
      market2: 'United States',
      market2Info: 'Growth, tech and broad exposure',
      market3: 'Europe',
      market3Info: 'Diversified market coverage',
      market4: 'Ongoing expansion',
      market4Info: 'More markets over time',
      offeringsEyebrow: 'Offerings',
      offeringsTitle: 'Work with Frydendahl Invest in the way that fits the task.',
      price1Tier: 'Product',
      price1Text:
        'A focused product for investors and advisors who want better structure, visibility and reporting.',
      price1Item1: 'Portfolio overview',
      price1Item2: 'Household and tax context',
      price1Item3: 'Advisor-ready reporting',
      price1Cta: 'Ask about the product',
      price2Tier: 'AI & Operations',
      price2Title: 'Agents and monitoring',
      price2Text:
        'Custom AI agent and monitoring solutions for finance, operations and knowledge-heavy workflows.',
      price2Item1: 'AI agents for business workflows',
      price2Item2: 'Monitoring and alerting design',
      price2Item3: 'Practical automation delivery',
      price2Item4: 'Tailored implementation',
      price2Cta: 'Discuss an AI solution',
      price3Tier: 'Consultancy',
      price3Title: 'Advisory engagements',
      price3Text:
        'Hands-on support for local companies, football clubs and owner-led organisations that need sharper systems and decisions.',
      price3Item1: 'Strategy and digital structure',
      price3Item2: 'Operational review and improvements',
      price3Item3: 'Flexible collaboration',
      price3Cta: 'Start a conversation',
      launchEyebrow: 'Launch-ready',
      launchTitle: 'Start with Frydendahl Invest on invest.begin.dk.',
      launchText:
        'We are ready to launch the brand site and begin conversations around Portfolio Tracker, AI agents, monitoring solutions and consultancy engagements for local businesses and football clubs.',
      launchCta1: 'Open invest.begin.dk',
      launchCta2: 'Email Rune',
      launchCta3: 'See contact details',
      quoteText:
        '“Frydendahl Invest combines product thinking, real investing experience, AI agent knowledge and practical consultancy in one place. That mix is what makes the work commercially useful.”',
      quoteAuthor: '— Frydendahl Invest approach',
      quoteSub: 'Products, advisory and active market participation',
      footerLead:
        'Investment products, AI agents, monitoring solutions and consultancy for investors and local organisations.',
      footerContactTitle: 'Contact',
      footerHostingTitle: 'Built for low-cost hosting',
      footerHost1: 'Works as a static site',
      footerHost2: 'Easy to host on Cloudflare Pages',
      footerHost3: 'Simple for WordPress or subdomain deployment',
      footerTagline: 'Investing. Products. AI agents. Consultancy.'
    }
  };

  const yearNode = document.querySelector('.footer-bottom span:first-child');
  const languageButtons = document.querySelectorAll('.lang-btn');
  const translatableNodes = document.querySelectorAll('[data-i18n]');
  const translatableAttrs = document.querySelectorAll('[data-i18n-attr]');
  const descriptionMeta = document.querySelector('meta[name="description"]');

  const setYear = () => {
    if (!yearNode) return;
    const year = new Date().getFullYear();
    yearNode.textContent = `© ${year} Frydendahl Invest ApS`;
  };

  const applyLanguage = (language) => {
    const locale = translations[language] ? language : 'da';
    const dictionary = translations[locale];

    document.documentElement.lang = locale;
    document.title = dictionary.pageTitle;
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', dictionary.metaDescription);
    }

    translatableNodes.forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (!key || !dictionary[key]) return;
      node.textContent = dictionary[key];
    });

    translatableAttrs.forEach((node) => {
      const attrMap = node.getAttribute('data-i18n-attr');
      if (!attrMap) return;

      attrMap.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((part) => part.trim());
        if (!attr || !key || !dictionary[key]) return;
        node.setAttribute(attr, dictionary[key]);
      });
    });

    languageButtons.forEach((button) => {
      const isActive = button.getAttribute('data-lang') === locale;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    localStorage.setItem('fi-language', locale);
    setYear();
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.getAttribute('data-lang'));
    });
  });

  const savedLanguage = localStorage.getItem('fi-language');
  applyLanguage(savedLanguage || 'da');
});
