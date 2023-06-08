import { NoteList } from '@/components/noteList';
import { TextBox } from '@/components/selectBox';
import { IL, IList } from '@/interface/list';
import { GlobalContext } from '@/lib/context/GlobalContext';
import { GetServerSideProps } from 'next';
import { useRef, useState } from 'react';

type Props ={
  NoteListData : IL
}
export default function Home({ NoteListData }: Props) {  
  const notedata = NoteListData?.data || [];
  const [list, setList] = useState<IList[]>([...notedata]);

  const [text, setText] = useState<string>("");
  const ref = useRef<any>(null);

  function changeText(newText: string) {
    setText(newText);
  }

  function addListItoms() {
    if (!text) return;
    setList([...list, {
      title: text,
      delete: true
    }]);
    ref.current.focus();
    setText("");
  }

  function deleteList(index: number) {
    setList(list?.filter((e: IList, i: number) => i != index) || []);
  }

  return (
    <GlobalContext.Provider
      value={{
        props: {
          list,
          addListItoms,
          deleteList,
          text,
          changeText,
          NoteListData,
          ref
        }
      }}>
      <h1>Note Taking Application</h1>
      <NoteList />
      <TextBox /><br />
      <button onClick={addListItoms} className="addListbutton">Add To List</button>
    </GlobalContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let response: any = await fetch('https://mocki.io/v1/261df909-5824-471b-afee-21d4d2d88b97');  // created my own data api
  const NoteListData = await response.json();  

  if (!NoteListData || NoteListData.length === 0) {
    return { notFound: true };
  }

  return { props: { NoteListData } };
};