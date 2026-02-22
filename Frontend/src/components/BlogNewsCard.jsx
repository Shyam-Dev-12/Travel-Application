import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const cardDetails = {
  1: {
    title: "Things To Do In International Destination",
    date: "23 May 2024",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80",
    content: `
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse ipsum, placeat perferendis laborum debitis eos, dolores suscipit laboriosam neque tempora nulla voluptatibus dolore veniam culpa natus. Necessitatibus cumque qui repudiandae!
      Aliquid eos est quam ipsa explicabo ex. Incidunt quos odit alias harum, laudantium dignissimos voluptates odio reprehenderit delectus quia ullam eligendi architecto temporibus quo quas sequi. Molestiae fugiat quam similique.
      Consectetur blanditiis qui magnam odit nostrum, expedita totam voluptates voluptatem similique autem, laboriosam quae ex. Voluptatem consequuntur eaque quod, eos facilis accusantium fuga soluta! Earum dignissimos aliquid iure nobis perferendis.
      Et laudantium sapiente aut similique cum magnam, asperiores error tempora nobis dignissimos. Ullam tempore saepe voluptate dicta assumenda sunt quod, sed illum laborum, rerum excepturi deleniti unde totam. Ipsam, neque.
      Adipisci eveniet blanditiis suscipit molestiae cupiditate iusto numquam, ea quam impedit nesciunt tempora minima deleniti ab veritatis beatae? Tempora, necessitatibus aliquid! Ab nemo velit dolore? Facilis obcaecati eveniet id ratione.
    `,
  },
  2: {
    title: "Things To Do In Domestic Destination",
    date: "18 June 2024",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1500&q=80",
    content: `
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora voluptatibus, aut expedita nemo delectus magnam unde quam iure quasi, dolores ex eius maxime dicta tempore veniam quo. Iste, rerum?
      Iure cum nisi fugiat! Dolor, accusamus, repellat, quae a sequi ducimus commodi numquam nulla magni velit ipsam? Et illum recusandae at, cumque numquam in, maxime quas, vitae doloribus officiis debitis!
      Assumenda vitae magni numquam sequi autem nam facere suscipit quod, laborum aspernatur consectetur doloribus totam eveniet officia magnam accusantium libero labore dolor quam aperiam eaque voluptatum consequuntur dolorum. Ipsum, voluptates?
      Rem dolorem ratione repellat perferendis corrupti? Impedit laboriosam quam earum, facere explicabo recusandae quo porro quidem dignissimos tempora exercitationem fugiat voluptatem consequuntur libero reprehenderit saepe et. Nemo quis ipsa tempore?
      Id facilis facere tempora earum odio velit hic dolor nisi odit! Fuga accusamus, iure incidunt, maiores magnam laborum fugit esse eius laboriosam placeat tenetur ad, saepe consectetur illo! Omnis, perferendis.
      Vel nesciunt autem suscipit, exercitationem pariatur eos, fugit similique cumque tempore illum ex est nisi laborum molestias, fugiat numquam reiciendis. Numquam est perspiciatis, cum provident sint similique impedit quia commodi.
      Voluptas nesciunt fuga harum! Incidunt iusto quo blanditiis veniam, voluptatum labore ab sit, quisquam amet magnam aut, eius laborum! Autem magnam ipsam, recusandae voluptatum accusantium id! Maxime mollitia tempora tempore!
      Vitae quos optio omnis amet nobis accusantium corrupti, consectetur alias dignissimos, quasi, explicabo error fugit rerum. Reprehenderit ex illo labore odit quae ab eos, perspiciatis commodi saepe! Inventore, officiis quas?
      Odio quasi minus provident ducimus nisi inventore deserunt ab amet, possimus consequuntur ut. Molestiae quas consectetur, similique voluptate voluptates nostrum quod animi necessitatibus atque blanditiis fugit minima. Dicta, beatae fugiat?
      Tempora necessitatibus facere consequatur odio quis deserunt officia molestiae deleniti animi! Voluptatibus, sit non excepturi quidem alias corporis officia officiis cumque, aspernatur asperiores praesentium facere, obcaecati quos similique hic neque.
    `,
  },
  3: {
    title: "Best Seasons to Travel",
    date: "05 July 2024",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80",
    content: `
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique suscipit, modi facilis deserunt architecto inventore voluptates delectus reprehenderit temporibus, mollitia provident in excepturi deleniti, quas adipisci rerum quam dolores obcaecati.
      Ea vero veritatis perferendis a placeat vitae maiores nobis officia omnis dolorem quo quisquam minus perspiciatis similique assumenda voluptate cupiditate sit eaque quam accusantium, est exercitationem sint? Ex, voluptate voluptatum?
      Commodi, at quia distinctio dolor nihil sint ducimus eligendi repellat aut aliquam, vero possimus. Assumenda autem repudiandae incidunt, porro totam iure perferendis ducimus in id cupiditate sed, nostrum nulla laboriosam?
      Veritatis voluptas modi iure ducimus reiciendis aliquam voluptatum, sint quod dolores repellat, rerum exercitationem, distinctio voluptate nemo reprehenderit natus commodi cum sapiente fugiat laboriosam eaque ad? Earum consequatur ipsa sequi?
      Quos corporis delectus earum itaque dolor accusamus, dolorum iste nostrum qui quidem aspernatur animi reprehenderit corrupti deserunt tempora, illo doloribus! Enim officia tempore dolorem dolores fugiat animi perferendis ad nesciunt.
      Voluptas, accusantium excepturi id vero aliquid, repellendus enim, eos odit quam ab cupiditate consequatur perspiciatis illo nisi quia incidunt. Sit neque sed et reiciendis eveniet vel cum, culpa fuga earum.
      Iste, pariatur! Aspernatur tenetur, fugit dolorem repudiandae quos repellendus iure magni sequi voluptas ex praesentium rem tempore veritatis. Explicabo, alias libero omnis totam dolorem nostrum esse maiores quos eveniet quas?
      Optio, quasi natus provident officiis, deleniti nam possimus recusandae, sed doloremque eligendi modi? Perspiciatis et temporibus neque, aperiam voluptatibus, adipisci animi, modi libero totam nostrum rem voluptate mollitia consectetur inventore.
      Excepturi cum libero unde eius eos rerum a adipisci, aliquam aliquid doloribus itaque odit omnis. Numquam eius earum hic magni, iusto at, quisquam beatae adipisci nam voluptates fugiat neque molestias.
      Dicta adipisci repudiandae odio ad vero aliquid exercitationem nisi molestias, ex repellendus amet deserunt asperiores placeat magni aspernatur quia tempore quisquam voluptates aut? Corrupti veniam quo odio officiis voluptatem quidem?
      Sed accusamus quibusdam qui quis commodi nesciunt quae cupiditate dolores! Vitae, tempora quae distinctio est velit nulla, amet esse aliquid incidunt illum asperiores facere dolores repellendus soluta! Eum, animi repudiandae.
      Dignissimos unde quae, tenetur at laudantium reprehenderit ex atque sapiente quasi ipsa perferendis, ut obcaecati, odit iste recusandae possimus placeat accusamus incidunt? Aliquid quia expedita magnam similique, quisquam excepturi asperiores?
      Nostrum suscipit impedit iure iste corrupti ab blanditiis eius explicabo fuga placeat exercitationem, quibusdam reprehenderit a laudantium quis mollitia vitae illum? Ab rerum accusamus numquam! Labore sequi mollitia harum officiis?
      Eligendi sequi ipsam illo? Quod culpa voluptas, sequi optio sit minima et magnam temporibus corrupti impedit repudiandae earum dolor adipisci quibusdam rerum unde iusto dolorum, non alias id natus nisi!
      Quibusdam provident ab quaerat quos obcaecati amet suscipit harum optio beatae quo cupiditate, minus corporis error perspiciatis ipsum numquam accusantium magnam dolorum, fugiat expedita tenetur? Debitis pariatur eius reprehenderit corrupti?
    `,
  },
  4: {
    title: "Smart Travel & Money Tips",
    date: "12 August 2024",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1500&q=80",
    content: `
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa voluptatibus officiis voluptatem quos tempore, numquam possimus, minus adipisci unde molestias, doloribus rerum provident fugiat excepturi necessitatibus quisquam. Et, odio?
     Maxime omnis eveniet minima in soluta, tenetur ipsum atque iste ex? Voluptatibus, hic delectus dolorum autem, voluptas fuga distinctio laboriosam aspernatur tempora odio voluptatum nulla esse eius sint, cumque facere.
     Officiis veritatis minima porro, autem consequuntur, quo, temporibus quis repellat dicta perferendis culpa? Eos minus quidem dicta voluptate, accusantium eius. Rerum laudantium, nulla corrupti perferendis ea mollitia magni vitae porro!
    `,
  },
};

export const BlogNewsCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = cardDetails[id];

  if (!item)
    return <p className="text-center mt-5 fw-bold">Item not found</p>;

  return (
    <div style={{ backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      {/* 🔵 Header Section */}
      <div
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "110px",
          position: "sticky", // makes it stay visible while scrolls happen
          top: 0,
          zIndex: 1,
        }}
      ></div>

    <Container
        className="text-center relative "
        style={{
            marginTop: "-60px",
            paddingBottom: "100px", // space above footer
            zIndex: 2,
        }}
        >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "40px",
            maxWidth: "900px",
            margin: "0 auto",
            position: "sticky",
            top: "5px", // stops at 5px below header
            overflowY: "auto",
            maxHeight: "calc(100vh - 180px)", // inner scroll height
            }}
        >
            <p className="text-start rounded fw-semibold text-center border"
                style={{
                    backgroundColor: "#e6f4ea",
                    width:"120px",
                    borderRadius: "8px",
                    color: "#006d3c",
                }}
            >
            {item.date}
            </p>

            <h2 className="fw-bold mb-3">{item.title}</h2>

            <p
            style={{
                color: "#444",
                lineHeight: "1.7",
                textAlign: "justify",
            }}
            >
            {item.content}
            </p>
        </motion.div>
    </Container>


      <Button onClick={() => navigate(-1)} className="fixed px-3 py-2 fw-bold border-0 rounded-1 text-info "
        style={{
          bottom: "130px", 
          right: "20px",
          backgroundColor: "#000",
          borderRadius: "8px",
          zIndex: 1000,
        }}
      >
        ← Back
      </Button>

      <footer className="fixed-bottom text-center py-4 mt-2 fw-semibold fs-6 text-white" style={{backgroundColor: "#000",}} >
        © 2025 SkyWing Travels | <span className="text-secondary">All Rights Reserved.</span>
        <hr className="text-white mx-auto " style={{ width: "70vw", marginTop: "19px" }} />
      </footer>
    </div>
  );
};
