import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const PATIENT_IMAGE_META = {
    'Thais-site.jpeg': {
        hidden: true,
    },
    'Thais.jpeg': {
        alt: 'Thais iniciando a fase de alinhadores com o corpo clínico da Inova',
        name: 'Thais',
        eyebrow: 'Alinhadores invisíveis',
        title: 'Algumas novas fases começam com mais leveza do que alarde.',
        story:
            'Thais chegou à clínica com algo raro: clareza. Não buscava exagero, nem transformação forçada. Buscava um cuidado à altura do que já existia de bonito, com leitura individual, conforto e previsibilidade em cada etapa.',
        quote:
            'Não se trata de mudar quem ela é. Trata-se de conduzir o que já existe com mais precisão, harmonia e confiança.',
        featured: true,
    },
    'Amanda.png': {
        eyebrow: 'Ortodontia com história',
        title: 'Há escolhas que amadurecem com calma e seguem com intenção.',
        story:
            'Amanda carrega um tipo de presença muito particular: atenta, curiosa e consciente do que faz sentido para si. O tratamento aqui não é sobre acelerar etapas. É sobre sustentar uma escolha madura com mais precisão.',
        quote:
            'Quando o processo combina com a pessoa, o resultado deixa de ser só estético e passa a ter verdade.',
    },
    'Amauri.png': {
        eyebrow: 'Reabilitação com cuidado',
        title: 'Quando o cuidado é bem conduzido, a segurança deixa de ser discurso.',
        story:
            'Há casos em que a confiança não nasce da promessa. Nasce do jeito como o paciente é recebido, entendido e acompanhado. Com Amauri, o valor da experiência está exatamente nessa condução sem ruído.',
        quote:
            'Cuidar bem também é diminuir o peso da decisão e aumentar a clareza do caminho.',
    },
    'Ana Maria.png': {
        eyebrow: 'Nova etapa',
        title: 'Firmeza e delicadeza raramente aparecem tão bem na mesma cena.',
        story:
            'Nem toda história precisa de excessos para marcar presença. Às vezes, o que permanece é a delicadeza de um processo bem conduzido, com escuta, direção e respeito ao tempo da paciente.',
        quote:
            'O melhor tratamento nem sempre é o que mais aparece. Muitas vezes, é o que faz tudo se encaixar com naturalidade.',
    },
    'Aparecida.png': {
        eyebrow: 'Presença da clínica',
        title: 'Alguns vínculos comunicam confiança antes mesmo de qualquer explicação.',
        story:
            'Há pacientes que transformam o espaço só por estarem ali. Com Aparecida, a imagem fala de vínculo, confiança e da sensação de estar em boas mãos desde o primeiro contato.',
        quote:
            'Confiança real não se impõe. Ela vai sendo percebida nos detalhes, no cuidado e na continuidade.',
    },
    'Bernardete.png': {
        eyebrow: 'Memória afetiva',
        title: 'O que permanece, quase sempre, é a forma como a experiência foi vivida.',
        story:
            'Mais do que registrar um momento, essa imagem ajuda a contar o tipo de relação que a clínica deseja cultivar: próxima, respeitosa e marcada por uma sensação genuína de cuidado.',
        quote:
            'Quando a experiência é boa de verdade, a lembrança dela continua elegante mesmo depois.',
    },
    'Charles.png': {
        eyebrow: 'Decisão com critério',
        title: 'Há decisões que já nascem mais maduras quando encontram a condução certa.',
        story:
            'Alguns pacientes chegam prontos para ouvir, entender e decidir com mais profundidade. Charles carrega exatamente essa leitura: menos ansiedade, mais clareza e mais aderência ao que precisa ser feito.',
        quote:
            'Escolher bem não é correr para resolver. É reconhecer quando a condução certa merece ser priorizada.',
    },
    'Cristiane.png': {
        eyebrow: 'Cuidado contínuo',
        title: 'Continuidade também é uma forma silenciosa de transmitir excelência.',
        story:
            'O que a imagem devolve aqui é a sensação de continuidade. De alguém que encontrou um ambiente em que o tratamento não foi apenas executado, mas acompanhado com atenção e consistência.',
        quote:
            'A diferença aparece quando o paciente sente que existe direção antes, durante e depois.',
    },
    'Estéfany.png': {
        eyebrow: 'Escolha consciente',
        title: 'Quando a escolha é consciente, a imagem inteira muda de tom.',
        story:
            'A clínica ganha outra atmosfera quando encontra pacientes que valorizam processo, leitura e profundidade. Estéfany entra aqui exatamente nesse ponto: uma escolha feita com mais consciência.',
        quote:
            'Há decisões que ficam mais leves quando o paciente percebe que não está escolhendo sozinho.',
    },
    'José Maria.png': {
        eyebrow: 'Trajetória respeitada',
        title: 'Todo bom cuidado começa respeitando a história que já existia antes dele.',
        story:
            'Em clínica, nem tudo se resume a procedimento. Há contexto, trajetória e uma forma muito particular de receber cuidado. Essa imagem tem força porque comunica respeito a tudo isso.',
        quote:
            'A melhor condução não apaga a história do paciente. Ela se apoia nela para seguir melhor.',
    },
    'Lara.png': {
        eyebrow: 'Leveza no processo',
        title: 'Leveza não é ausência de critério. É critério bem conduzido.',
        story:
            'Quando o ambiente transmite clareza e cuidado, o tratamento deixa de parecer um peso constante. A imagem da Lara conversa com essa sensação de leveza sem perder seriedade.',
        quote:
            'Elegância clínica também está em fazer o processo parecer mais simples sem torná-lo superficial.',
    },
    'Lucas.jpeg': {
        eyebrow: 'Nova confiança',
        title: 'Há imagens em que a confiança aparece sem precisar ser anunciada.',
        story:
            'Há fotos que não precisam dizer muito para comunicar presença. A força aqui está justamente nisso: uma imagem clara, direta e coerente com uma decisão bem sustentada.',
        quote:
            'Quando o paciente confia no caminho, a imagem deixa de registrar só o momento e começa a registrar também a segurança.',
    },
    'Maria Edite.png': {
        eyebrow: 'Memória da clínica',
        title: 'Nem toda prova social precisa soar comercial para ser inesquecível.',
        story:
            'Nem toda prova social precisa soar comercial. Com Maria Edite, o registro funciona porque carrega humanidade, tempo e a percepção de que houve cuidado real em torno da experiência.',
        quote:
            'O que mais toca nem sempre é o antes e depois. Às vezes, é a forma como a pessoa foi acolhida durante tudo.',
    },
    'Maria Flor.png': {
        eyebrow: 'Delicadeza com direção',
        title: 'Suavidade e direção podem dividir a mesma imagem com rara precisão.',
        story:
            'Há imagens que parecem respirar melhor. Essa é uma delas. Ela conversa com um tipo de cuidado mais delicado, mas ainda assim muito consciente do que precisa ser conduzido.',
        quote:
            'Cuidado sofisticado não pesa na cena. Ele organiza a experiência e deixa tudo mais claro.',
    },
    'Mylena.png': {
        eyebrow: 'História bem acompanhada',
        title: 'Algumas jornadas ganham força justamente pela constância com que são acompanhadas.',
        story:
            'Uma boa clínica também é percebida pela forma como acompanha o paciente ao longo do tempo. Com Mylena, essa sensação de continuidade aparece com muita naturalidade.',
        quote:
            'O tratamento melhora quando o paciente sente que existe acompanhamento, não apenas execução.',
    },
    'Nayara.png': {
        eyebrow: 'Clareza na decisão',
        title: 'O momento mais bonito de uma escolha é quando ela finalmente encontra direção.',
        story:
            'A imagem funciona porque comunica tranquilidade. E tranquilidade, em clínica, quase sempre é consequência de um processo que fez sentido, de uma escuta que aconteceu e de uma condução segura.',
        quote:
            'Quando tudo é bem explicado, a decisão perde peso e ganha maturidade.',
    },
    'Neusa.png': {
        eyebrow: 'Vínculo construído',
        title: 'Vínculo também é parte do tratamento, mesmo quando ninguém o nomeia.',
        story:
            'Há histórias que ficam bonitas não só pela imagem em si, mas pelo que elas representam dentro da clínica: permanência, confiança e uma relação construída sem pressa.',
        quote:
            'O melhor atendimento não tenta impressionar rápido. Ele vai criando confiança até isso se tornar inevitável.',
    },
    'Paula Justus.jpeg': {
        eyebrow: 'Nova fase',
        title: 'Há fases que começam no instante exato em que tudo passa a fazer sentido.',
        story:
            'Com Paula, a imagem comunica algo que a clínica valoriza muito: presença, intenção e a sensação de que existe um novo capítulo se abrindo com mais convicção.',
        quote:
            'Existem fases que começam de forma silenciosa, mas já chegam carregadas de direção.',
    },
    'Raniele.png': {
        eyebrow: 'Passo bem dado',
        title: 'Quando o passo é bem dado, toda a experiência muda de tom.',
        story:
            'Em vez de um registro qualquer, a imagem da Raniele funciona como síntese do que importa: um processo mais claro, um ambiente confiável e a sensação de estar seguindo com critério.',
        quote:
            'Quando o passo é bem dado, o paciente percebe isso antes mesmo de ver o resultado final.',
    },
    'Rebeca.png': {
        eyebrow: 'Confiança em construção',
        title: 'A confiança cresce diferente quando a condução é realmente boa.',
        story:
            'A força dessa imagem está no que ela sugere: um tratamento que não foi vivido com tensão, mas com mais equilíbrio, entendimento e presença da equipe ao redor.',
        quote:
            'O processo fica mais bonito quando o paciente entende o caminho e passa a confiar nele.',
    },
    'Rosane e Susane.png': {
        eyebrow: 'Laços reais',
        title: 'Algumas imagens não registram só presença. Registram relação.',
        story:
            'Rosane e Susane entram aqui como lembrança de que a clínica também é feita de encontros, conversas e vínculos que ultrapassam o procedimento em si.',
        quote:
            'Quando duas histórias cabem na mesma imagem, o que aparece não é só resultado. É presença compartilhada.',
    },
    'Ruth.png': {
        eyebrow: 'Tempo e cuidado',
        title: 'Certas decisões amadurecem melhor quando encontram o ambiente certo.',
        story:
            'Nem sempre o valor de uma experiência está no impacto imediato. Às vezes, ele aparece na serenidade com que tudo foi conduzido e no modo como a paciente passa a sustentar essa escolha.',
        quote:
            'Cuidado de verdade não acelera o que precisa de tempo. Ele acompanha com inteligência.',
    },
    'Samer.png': {
        eyebrow: 'Vínculo com a clínica',
        title: 'No fim, algumas imagens valem mais pela presença do que pelo procedimento.',
        story:
            'Samer traz para a seção um tipo de lembrança que nenhuma estética artificial substitui. Aqui, a força não está em vender resultado. Está em mostrar afeto, proximidade e humanidade real.',
        quote:
            'No fim, algumas das imagens mais fortes da clínica não são sobre dentes. São sobre pessoas.',
    },
    'Selma.png': {
        eyebrow: 'Experiência com calma',
        title: 'Há experiências que permanecem justamente porque foram vividas sem ruído.',
        story:
            'Essa imagem reforça uma das qualidades mais valiosas para a marca: transmitir solidez sem rigidez. Com Selma, o registro conversa exatamente com essa sensação.',
        quote:
            'Quando a clínica transmite calma, o paciente começa a sentir segurança antes mesmo de qualquer resultado.',
    },
    'Wellington.png': {
        eyebrow: 'Presença e direção',
        title: 'O bom cuidado também se reconhece pelo clima que a imagem sustenta.',
        story:
            'Mais do que um registro pontual, essa foto carrega uma atmosfera de decisão madura, presença da equipe e confiança em torno do que está sendo conduzido.',
        quote:
            'Uma boa imagem não precisa exagerar nada quando a experiência já comunica segurança por si só.',
    },
};

function labelFromFilename(filename) {
    return filename
        .replace(/\.[^.]+$/, '')
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

export function getPatientGalleryImages() {
    const directory = path.join(process.cwd(), 'public', 'assets', 'pacientes', 'site');

    if (!fs.existsSync(directory)) {
        return [];
    }

    return fs
        .readdirSync(directory, { withFileTypes: true })
        .filter((entry) => entry.isFile())
        .filter((entry) => IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((entry, index) => {
            const meta = PATIENT_IMAGE_META[entry.name] ?? {};

            return {
                src: `/assets/pacientes/site/${entry.name}`,
                filename: entry.name,
                alt: meta.alt ?? labelFromFilename(entry.name) ?? `Paciente ${index + 1}`,
                name: meta.name ?? labelFromFilename(entry.name),
                eyebrow: meta.eyebrow ?? 'Queridos pacientes',
                title: meta.title ?? null,
                story: meta.story ?? null,
                quote: meta.quote ?? null,
                objectPosition: meta.objectPosition ?? 'center top',
                featured: Boolean(meta.featured),
                hidden: Boolean(meta.hidden),
                priority: index < 2,
            };
        })
        .filter((image) => !image.hidden)
        .sort((a, b) => Number(b.featured) - Number(a.featured));
}
