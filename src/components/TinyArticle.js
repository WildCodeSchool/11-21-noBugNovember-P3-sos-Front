import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyArticle() {
  const [value,setValue]=useState('');
  const editorRef = useRef(null);
  const handleClick = () =>{

    console.log('TINY MCE CONTENT ',value)
  }
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
              onEditorChange={(newValue, editor) => setValue(newValue)}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>Ecrire le corp de l'article ici</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists image print',
            'searchreplace visualblocks fullscreen',
            'insertdatetime paste wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Send</button>

    </>
  );
}