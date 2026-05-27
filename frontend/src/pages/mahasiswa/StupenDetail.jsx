import ProgramDetailCard from "../../components/cards/ProgramDetailCard";
import Poster from "../../assets/poster.png";
import LogoShopee from "../../assets/logo-shopee.png";
import Button from "../../components/ui/Button";

const StupenDetail = () => {

  const programDetail = {

    title:
      "Machine Learning Engineer Path",

    company:
      "Dicoding Indonesia",

    logo: LogoShopee,
    poster: Poster,

    deadline:
      "30 Januari 2026",

    timeline:
      "1 Februari - 31 Mei 2026",

    link:
      "https://dicoding.com",

    description:
      "Program Studi Independen...",
  };

  return (
    <ProgramDetailCard
      programDetail={programDetail}
      backTo="/stupen-list"
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

export default StupenDetail;