import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import GenerateRecieptHtml from "./generateRecieptHtml";

export const handleDownloadPdf = async () => {
  const html = GenerateRecieptHtml();
  const { uri } = await Print.printToFileAsync({ html });

  alert(`Receipt PDF saved at ${uri}`);
};

export const handleShareFile = async () => {
  const html = GenerateRecieptHtml();
  const { uri } = await Print.printToFileAsync({ html });

  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(uri);
  } else {
    alert("Sharing is not available on this platform");
  }
};
