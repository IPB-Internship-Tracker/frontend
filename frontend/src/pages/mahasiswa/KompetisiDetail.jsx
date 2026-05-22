import ProgramDetailCard from "../../components/cards/ProgramDetailCard";
import Poster from "../../assets/poster.png";
import LogoShopee from "../../assets/logo-shopee.png";
import Button from "../../components/ui/Button";

const KompetisiDetail = () => {

  const programDetail = {

    title: "National UI/UX Competition",
    company: "Shopee Indonesia",
    logo: LogoShopee,
    poster: Poster,
    deadline: "30 Januari 2026",
    timeline: "1 Februari - 31 Mei 2026",
    link:
      "https://competition.shopee.co.id",

    description:
      "Lorem ipsum dolor sit amet...",
  };

  return (

    <ProgramDetailCard
      programDetail={programDetail}
      backTo="/kompetisi-list"
      actionButton={
        <Button
          label="Daftar"
          to={programDetail.link}
          className="w-[180px]"
        />
      }
    />

  );
};

export default KompetisiDetail;