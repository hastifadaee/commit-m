import {Box, Radio, Typography} from "@mui/material";

const AnswerChoice = ({answers}:{answers:string[]})=>{
    return(
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={1}>
            {
                answers.map((answer , index:number) => {
                    return (
                        <Box key={index} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography>{answer}</Typography>
                            <Radio value={index+1}/>
                        </Box>
                    )
                })
            }
        </Box>
    )
}
export default AnswerChoice;