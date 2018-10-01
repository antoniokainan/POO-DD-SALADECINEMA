class export cliente{
    private id: string;
    private tel: string;

    public constructor(id: string ; tel: string){
        this.id;
        this.tel;
    }

    public getId() : string{
        return this.id;
    }
     public setId(id : string) : void {
         this.id=id;
     }
     public getTel() : string{
        return this.tel;
    }
     public setTel(tel : string) : void {
         this.tel=tel;
     }

     Public toString : string {
        let variavel : string = "" +
        this.id + ":" + this.fone;
        return variavel;
      }
}