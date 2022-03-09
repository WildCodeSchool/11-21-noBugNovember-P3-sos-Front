import React, { useRef, useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import './Styles/TinyArticle.css'

export default function TinyArticle(props) {
  const { articleText } = props
  const [value, setValue] = useState('')
  const editorRef = useRef(null)

  // onEditorChange={(newValue, editor) => setArticle({textArticle:newValue})}
  return (
    <>
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        onEditorChange={(newValue, editor) => (articleText.current = newValue)}
        ref={articleText}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=''
        init={{
          height: 300,
          menubar: true,
          plugins: [
            'advlist autolink lists image print',
            'searchreplace visualblocks fullscreen',
            'insertdatetime paste wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  )
}
