import { ApolloError, gql, useMutation } from "@apollo/client"
import { ChangeEvent, useRef, useState } from "react"
import { RiImageAddLine } from "@react-icons/all-files/ri/RiImageAddLine"
import { checkValidationImageFile } from "../../../src/commons/libraries/validationFile"

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
            writer
            title
        }
    }
`

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file){
            url
        }
    }
`

interface UploadFile {
    uploadFile: {
        url: string
    }
}
 
export default function ImageUploadPage(){
    const [imageUrl, setImageUrl] = useState<string|undefined>("");
    const [fileName, setFileName] = useState<string|undefined>("")

    const [uploadFile] = useMutation<UploadFile>(UPLOAD_FILE)
    const fileRef = useRef<HTMLInputElement>(null);

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = event.target.files?.[0] // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능

        const isImageFileValid = checkValidationImageFile(file);
        // isValid가 false이면 return 실행
        if (!isImageFileValid) return;

        setFileName(file?.name)

        const result = await uploadFile({ variables: { file: file } })
        setImageUrl(result.data?.uploadFile.url)
    }

    const onClickImage = () => {
        fileRef.current?.click();
    }

    //////////////////////////////////////////////////////////
    
    const [writer, setWriter] = useState<string|undefined>("");
    const [title, setTitle] = useState<string|undefined>("");
    const [contents, setContents] = useState<string|undefined>("");

    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async(): Promise<void> => {
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: "1234",
                        title: title,
                        contents: contents,
                        images: [imageUrl]
                    }
                }
                ,
                onCompleted: (success) => {
                    console.log(result)
                    window.navigator.clipboard.writeText(success.createBoard._id).then(() => {
                        alert(`게시글이 등록되었습니다.\n게시글 ID가 클립보드에 복사되었습니다.`)
                      });
                }
            });
        } catch(error) {
            if (error instanceof ApolloError) {
                alert(error.message);
            } 
        }
        
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
        setWriter(event.currentTarget.value);
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
        setContents(event.target.value);
    }
   
    //////////////////////////////////////////////////////////

    return (
        <div>
            <div style={{display: "flex", gap: "5px"}}>
                <div>작성자: <input type="text" onChange={onChangeWriter}/></div>
                <div>제목: <input type="title" onChange={onChangeTitle} /></div>
                <div>내용: <input type="text" onChange={onChangeContents} /></div>
                <div style={{ display: "flex", gap: "5px", alignItems: "center"}}>
                    <RiImageAddLine style={{ width: "30px", height: "30px", cursor: "pointer"}} onClick={onClickImage}>이미지선택</RiImageAddLine>
                    <div style={{fontSize: "14px"}}>{fileName}</div>
                </div>
                <button onClick={onClickSubmit}>게시글 등록</button>
            </div>
            <div>
                <input type ="file" onChange={onChangeFile} multiple={true} style={{ display: 'none' }} ref={fileRef} accept="image/jpeg,image/png"/>
                <img src={`https://storage.googleapis.com/${imageUrl}`} style={{ display: imageUrl ? 'block' : 'none'}} />
            </div>
        </div>
    )
}