import { useState } from "react"
import { useAuth } from "../../../context/auth-context";
import { Button } from "..";

interface Props {
  projectId: string;
  callback?: () => void
}
const RemoveProjectBtn = ({ projectId, callback }: Props) => {
  const { user } = useAuth();

  const token = user?.token;
  const [loading, setLoading] = useState<boolean>(false)

  const handleClick = async () => {
    try {
      setLoading(true)

      await fetch(`/api/project/${projectId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      callback && callback()
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button disabled={loading} onClick={handleClick}>Xoá</Button>
  )
}

export {
  RemoveProjectBtn
}
