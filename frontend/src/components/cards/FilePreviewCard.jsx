import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
} from "@pdf-viewer/react";

import {
  ArrowRight,
  FileText,
} from "lucide-react";

import NextButton from "../ui/NextButton";

const FilePreviewCard = ({
  title,
  fileUrl,
}) => {

  const isPDF =
    fileUrl?.toLowerCase().includes(".pdf");

  return (

    <div className="space-y-2">

      {/* TITLE */}
      <h3 className="text-md font-semibold">
        {title}
      </h3>

      {/* PREVIEW */}
      <div
        className="
          h-56
          overflow-hidden
          rounded-xl
          border
          border-light-blue
          bg-gray-100
        "
      >

        {isPDF ? (

          <RPProvider src={fileUrl}>

            <RPDefaultLayout>

              <RPPages />

            </RPDefaultLayout>

          </RPProvider>

        ) : (

          <img
            src={fileUrl}
            alt={title}
            className="
              w-full
              h-full
              object-cover
            "
          />

        )}

      </div>

    <NextButton
    to={fileUrl}
    label="Selengkapnya"
    />

    </div>
  );
};

export default FilePreviewCard;