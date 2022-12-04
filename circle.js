class shape{
    area;
    calculateArea(area){
        this.area=area;
    }
}

class circle extends shape{
     calculateArea(area){
       super(area);
    }
}