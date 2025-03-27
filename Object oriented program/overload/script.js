class maths{
    sum(a,b,c,d)
    {
        if(b==undefined && c==undefined && d==undefined)
        {
            document.writein("plese enter atleat two number");
        }
        else if(c==undefined && d==undefined)
        {
            document.writein(a+b);
        }
        else if(d==undefined)
        {
            document.writein(a+b+c);
        }
        else
        {
            document.writein(a+b+c+d);
        }
    }

}


const obj1 = new maths();

obj1.sum(10,10,10);



