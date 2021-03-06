import "./Styles/TinyArticle.css";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyArticle( { setArticleContent, modifArticle }) {
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        // name="articleContent"
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        onEditorChange={(newValue, editor) => setArticleContent(newValue,"para1")}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={modifArticle}
        init={{
          height: 300,
          menubar: true,
          plugins: [
            "advlist autolink lists image print",
            "searchreplace visualblocks fullscreen",
            "insertdatetime paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
