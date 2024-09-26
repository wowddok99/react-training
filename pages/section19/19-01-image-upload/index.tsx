import { gql, useMutation } from "@apollo/client"
import { ChangeEvent } from "react"

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file){
            url
        }
    }
`

interface UploadFile {
    url: string
}
 
export default function ImageUploadPage(){
    const [uploadFile] = useMutation<UploadFile>(UPLOAD_FILE)

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = event.target.files?.[0] // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
        console.log(file)

        const result = await uploadFile({ variables: { file: file } })
        const imageUrl = result.data?.url;
        console.log(imageUrl);
    }

    return (
        <div>
            <input type ="file" onChange={onChangeFile} multiple={true} />
        </div>
    )
}