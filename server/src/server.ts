import express from "express";
const app=express();
app.get("/api/health",(req,res)=>{
    res.json({ status: "ok", message: "Kapl Store server chal raha hai" });
})
const PORT=5000;

app.listen(PORT,()=>{
    console.log(`Server chal raha hai: http://localhost:
      ${PORT}`);
})