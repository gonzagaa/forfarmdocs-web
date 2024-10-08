import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { AddCFDTO, CFDTO, addCFSchema } from "../dto/cf";
import { db } from "../../../services/firebase";

// Função para adicionar uma fazenda
// async function addCF(data: AddCFDTO): Promise<boolean | string> {
//   try {
//     const validated = await addCFSchema.validate(data);

//     // Remover campos com valor undefined
//     const cleanedData = Object.fromEntries(
//       Object.entries(validated).filter(([_, v]) => v !== undefined)
//     );

//     const docRef = await addDoc(collection(db, "CF"), {
//       updatedAt: new Date().toISOString(),
//       createdAt: new Date().toISOString(),
//       ...cleanedData,
//     });

//   //   Alert.alert("Documento adicionado com sucesso!");
//   //   return docRef.id;
//   // } catch (error: any) {
//     // Alert.alert("Erro ao adicionar Documento", error.message);
//     // console.error("Erro ao adicionar Documento", error);
//     // return false;
//   }
// }

// Função para obter todas as fazendas
async function getCFByFazendaId(fazendaId: string): Promise<CFDTO[]> {
  try {
    const q = query(collection(db, "CF"), where("fazendaId", "==", fazendaId));
    const querySnapshot = await getDocs(q);

    const CF: CFDTO[] = querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as CFDTO)
    );

    return CF;
  } catch (error) {
    console.error("Erro ao consultar documentos da fazenda", error);
    return [];
  }
}

// Função para obter uma fazenda pelo ID
async function getCFById(id: string): Promise<CFDTO> {
  try {
    const docRef = doc(db, "CF", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as CFDTO;
    } else {
      throw new Error("Documento não encontrado");
    }
  } catch (error) {
    console.error("Erro ao consultar documento", error);
    return {} as CFDTO;
  }
}

// async function deleteCF(id: string): Promise<boolean> {
//   try {
//     await deleteDoc(doc(db, "CF", id));
//     Alert.alert("Documento deletado com sucesso!");
//     return true;
//   } catch (error) {
//     Alert.alert("Erro ao deletar documento");
//     console.error("Erro ao deletar documento", error);
//     return false;
//   }
// }

// export { addCF, getCFByFazendaId, getCFById, deleteCF };
