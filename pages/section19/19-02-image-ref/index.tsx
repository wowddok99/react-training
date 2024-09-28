import { gql, useMutation } from "@apollo/client"
import { ChangeEvent, useRef, useState } from "react"
import { RiImageAddLine } from "@react-icons/all-files/ri/RiImageAddLine"
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
    const [uploadFile] = useMutation<UploadFile>(UPLOAD_FILE)
    const fileRef = useRef<HTMLInputElement>(null);

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = event.target.files?.[0] // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
        console.log(file)

        const result = await uploadFile({ variables: { file: file } })
        setImageUrl(result.data?.uploadFile.url)
    }

    const onClickImage = () => {
        fileRef.current?.click();
    }

    return (
        <div>
            <RiImageAddLine style={{ width: "40px", height: "40px", cursor: "pointer"}} onClick={onClickImage}>이미지선택</RiImageAddLine>
            <div>
                <input type ="file" onChange={onChangeFile} multiple={true} style={{ display: 'none' }} ref={fileRef} />
                <img src={`https://storage.googleapis.com/${imageUrl}`} style={{ display: imageUrl ? 'block' : 'none'}} />
            </div>
        </div>
    )
}