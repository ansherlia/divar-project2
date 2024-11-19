import CategoryForm from "components/templates/CategoryForm";
import CategoryList from "src/components/templates/CategoryList";

function AdminPage() {
  return (
    <div>
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
