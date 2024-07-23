// components/PrintButton.tsx
import React, { useRef } from 'react';
import PrintComponent from './PrintComponent';

export default function PrintButton() {
    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        if (printRef.current) {
            const printContents = printRef.current.innerHTML;
            const originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
            window.location.reload(); // reload to restore original state
        }
    };

    return (
        <div>
            <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Imprimir
            </button>
            <div className="hidden">
                <PrintComponent ref={printRef} />
            </div>
        </div>
    );
};

//export default PrintButton;
