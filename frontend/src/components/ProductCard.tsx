import { EditIcon, Trash2Icon, ExternalLinkIcon } from "lucide-react";
import type { Product } from "../store/type.interface";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

export default function ProductCard({ product }: { product: Product }) {
    const { deleteProduct } = useProductStore();
    return (
        <div className="group relative overflow-hidden rounded-3xl bg-base-100/40 backdrop-blur-xl border border-base-content/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

            {/* PRODUCT IMAGE CONTAINER */}
            <figure className="relative pt-[75%] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* IMAGE OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* FLOATING ACTION OVERLAY */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Link
                        to={`/product/${product.id}`}
                        className="btn btn-circle btn-sm btn-glass hover:btn-primary border-none shadow-lg"
                        title="Edit Product"
                    >
                        <EditIcon className="size-4" />
                    </Link>
                    <button
                        className="btn btn-circle btn-sm btn-glass hover:btn-error border-none shadow-lg"
                        title="Delete Product"
                        onClick={() => deleteProduct(product.id)}
                    >
                        <Trash2Icon className="size-4" />
                    </button>
                </div>
            </figure>

            <div className="p-6">
                {/* PRODUCT CATEGORY / TAG */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-sm badge-outline border-primary/30 text-primary/70 px-3 py-2 font-medium uppercase tracking-wider text-[10px]">Premium</span>
                    <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold ml-auto">
                        #{product.id}
                    </span>
                </div>

                {/* PRODUCT INFO */}
                <h2 className="text-xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors duration-300 truncate">
                    {product.name}
                </h2>

                <div className="flex items-end justify-between mt-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] opacity-50 font-black uppercase tracking-[0.2em]">Price Tag</span>
                        <p className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-br from-primary to-secondary">
                            ${Number(product.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                    </div>

                    <Link
                        to={`/product/${product.id}`}
                        className="btn btn-primary btn-md rounded-2xl gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 group/btn border-none"
                    >
                        <span className="font-bold">Details</span>
                        <ExternalLinkIcon className="size-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
