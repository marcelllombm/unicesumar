import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Logo(){
    return (
        <Link href="/" title='Página Inicial' className='flex gap-3'>
            <ShoppingCart className='h-6 w-6'/>
            <h1>ConfeiTech</h1>
        </Link>
    )
}