using UnityEngine;
using UnityEngine.UI;

public class playercontroller : MonoBehaviour
{
    float movex;
    float movez;
    CharacterController cn;

    float speed;
    float walkspeed = 8f;
    float sprintspeed = 100f;
    float jumpforce = 400f;
    float dodgespeed = 800f;

    float stamina = 100;

    [SerializeField] Camera cam;
    [SerializeField] Slider slider;

    bool iscrouch = false;
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        cn = GetComponent<CharacterController>();
    }

    // Update is called once per frame
    void Update()
    {
        slider.value = stamina;
        movex = Input.GetAxis("Horizontal") * speed * Time.deltaTime;
        movez = Input.GetAxis("Vertical") * speed * Time.deltaTime;
        Vector3 move = transform.right * movex + transform.forward * movez;

        if (movez > 0.1)
        {
            if (Input.GetKey(KeyCode.LeftShift) && stamina >= 10)
            {
                speed = Mathf.Lerp(speed, 50,sprintspeed * Time.deltaTime);
                stamina -= 10f;
            }
        }

        if (cn.isGrounded)
        {
            if (Input.GetKeyDown(KeyCode.Space))
            {
                move.y = jumpforce * Time.deltaTime;
            }
        }

        if (Input.GetKeyDown(KeyCode.C))
        {
            iscrouch = !iscrouch;
            crouching();
        }

        if (Input.GetKeyDown(KeyCode.LeftControl) && stamina >= 25)
        {
            speed = dodgespeed;
            stamina -= 25f;
        }

        else
        {
            move.y -= 9.81f * Time.deltaTime;
            speed = walkspeed;
            stamina += 10f * Time.deltaTime;

            if (stamina >= 100)
            {
                stamina = 100f;
            }
        }

        cn.Move(move);

        void crouching()
        {
            if (iscrouch)
            {
                cam.transform.localPosition = new Vector3(0, 0.75f, 0);
            }

            else
            {

                cam.transform.localPosition = new Vector3(0, 2.115028f, 0);
            }
        }
    }
}
