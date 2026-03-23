import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system/legacy";
import GenerateRecieptHtml from "./generateRecieptHtml";

interface ReceiptProps {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  fullName: string;
  hotelName: string;
  roomName: string;
  total: string;
  qrCodeBase64?: string;
}

const buildPdf = async (params: ReceiptProps): Promise<string> => {
  const html = GenerateRecieptHtml(params);
  const { uri } = await Print.printToFileAsync({ html, base64: false });

  return uri;
};

export const handleDownloadPdf = async (params: ReceiptProps) => {
  try {
    const uri = await buildPdf(params);

    const newPath = FileSystem.documentDirectory + `receipt-${Date.now()}.pdf`;

    await FileSystem.moveAsync({
      from: uri,
      to: newPath,
    });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(newPath);
    }
    alert("Receipt saved to: " + newPath);
  } catch (err) {
    console.error(err);
    alert("Could not generate PDF. Please try again.");
  }
};