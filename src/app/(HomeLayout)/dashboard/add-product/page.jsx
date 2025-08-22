
import AddProductForm from "./AddProductForm";

const AddProduct = () => {
    return (
        <section className="my-8 md:my-14">
            <div className="w-11/12 md:w-10/12 max-w-7xl mx-auto px-4 py-6 md:p-8 lg:p-14 border shadow-lg rounded-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Add New Product</h2>
                <AddProductForm></AddProductForm>
            </div>
        </section>

    );
};

export default AddProduct;