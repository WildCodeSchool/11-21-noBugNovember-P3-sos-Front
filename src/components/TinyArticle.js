import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './Styles/TinyArticle.css'

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
        initialValue=""
        init={{
          height: 300,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
<div className="valuuue">{value}</div>
    </>
  );
}