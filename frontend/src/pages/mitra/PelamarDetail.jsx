import BackButton from "../../components/ui/BackButton";
import FilePreviewCard from "../../components/cards/FilePreviewCard";
import PersonalInfoItem from "../../components/ui/PersonalInfoItem";
const PelamarDetail = () => {

  // DUMMY DATA
  const applicantDetail = {
    name: "Fatiyya Ilmi Zahra",
    email: "fatiyyailmi@apps.ipb.ac.id",
    nim: "G6401231016",
    faculty: "SSMI",
    phone: "081234568910",
    semester: "6",
    major: "Ilmu Komputer",
    documents: [
      {
        title: "Curriculum Vitae / Resume",

        fileUrl:
          "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
      },
      {
        title: "Motivation Letter",

        fileUrl:
          "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
      },
      {
        title: "Portofolio",

        fileUrl:
          "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf",
      },
    ],
  };

  return (

    <div className="max-w-4xl mx-auto space-y-6">

      {/* BACK BUTTON */}
      <BackButton
        label="Kembali"
        color="text-bold-blue"
        position="relative"
        to="/pelamar-list"
      />

      {/* TITLE */}
      <div>

        <h1 className="text-xl font-bold text-black mb-2">
          Detail Pelamar
        </h1>

      </div>

      {/* MAIN CARD */}
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          p-10
        "
      >

        {/* TITLE */}
        <div className="text-center mb-10">

          <h1 className="text-2xl font-bold text-bold-blue mb-2">
            Data Pelamar
          </h1>

          <p className="text-sm text-bold-blue/80 max-w-xl mx-auto">
            Informasi detail pelamar beserta
            dokumen pendaftaran yang telah diunggah.
          </p>

        </div>

        {/* LINE */}
        <div className="border-b border-light-blue/40 mb-12"></div>

        {/* DATA PRIBADI */}
        <div className="mb-12">

          <h2 className="text-xl font-semibold text-center mb-10">
            Data Pribadi
          </h2>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-y-8
              gap-x-16
            "
          >

            {/* LEFT */}
            <div className="space-y-6">

              <PersonalInfoItem
                label="Nama Panjang"
                value={applicantDetail.name}
              />

              <PersonalInfoItem
                label="Email"
                value={applicantDetail.email}
              />

              <PersonalInfoItem
                label="NIM"
                value={applicantDetail.nim}
              />

              <PersonalInfoItem
                label="Fakultas"
                value={applicantDetail.faculty}
              />

            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              <PersonalInfoItem
                label="Nomor HP"
                value={applicantDetail.phone}
              />

              <PersonalInfoItem
                label="Semester"
                value={applicantDetail.semester}
              />

              <PersonalInfoItem
                label="Program Studi"
                value={applicantDetail.major}
              />

            </div>

          </div>

        </div>

        {/* LINE */}
        <div className="border-b border-light-blue/40 mb-12"></div>

        {/* LAMPIRAN */}
        <div>

          <h2 className="text-xl font-semibold text-center mb-10">
            Lampiran
          </h2>

          <div className="space-y-10">

            {applicantDetail.documents.map(
              (doc, index) => (

                <FilePreviewCard
                  key={index}
                  title={doc.title}
                  fileUrl={doc.fileUrl}
                />

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default PelamarDetail;