import React, { forwardRef } from 'react';
import Bloco from './Bloco';

const PrintComponent = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="p-10 bg-white text-black">
            <Bloco />
        </div>
    );
});

export default PrintComponent;
