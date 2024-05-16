import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/component/GifItem";

describe("pruebas en GifItem", function() {

    const title = 'saitama';
    const url = 'http://one-punch.com/saitama.jpg';

    test('debe hacer match con el snapshoot', () =>{
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL y yl ALT indicado', () =>{
        render(<GifItem title={title} url={url} />);
       // expect( screen.getByRole('img').src).toBe( url );
       const {src, alt} = screen.getByRole('img');
       expect(src).toBe( url );
       expect(alt).toBe( title)

    });

});