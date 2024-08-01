import { ChangeEvent, MouseEvent } from "react"

export interface BoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface boardUpdateInput {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface BoardWriteUIProps {
    onClickRegister: (event: MouseEvent<HTMLButtonElement>) => void 
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
    onInputWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onInputTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onInputContents: (event: ChangeEvent<HTMLInputElement>) => void
    isEdit: boolean
    data?: any
}